/**
 * Update Command - Fetch latest code via ZIP (Owner Only)
 *
 * Heroku (Docker / container stack):
 *   - Filesystem is EPHEMERAL — process.exit(0) causes dyno restart from the
 *     same Docker IMAGE, not the updated files on disk.
 *   - So "copy files + exit" does NOT persist across restarts on Heroku.
 *   - The only safe update path on Heroku is: push new code → Heroku rebuilds
 *     the image → new dyno starts.
 *   - This command handles that via the Heroku Platform API (if HEROKU_API_KEY
 *     + HEROKU_APP_NAME are set as config vars).
 *
 * VPS / Render / Koyeb / Katabump (persistent filesystem):
 *   - Copy files → npm install if package.json changed → exit (panel/pm2 restarts).
 *
 * Preserves: node_modules, session, tmp, temp, database, config.js, .git
 */

const { exec } = require('child_process');
const fs   = require('fs');
const path = require('path');
const https = require('https');
const http  = require('http');
const config = require('../../config');

const MAX_REDIRECTS = 5;

// ── helpers ──────────────────────────────────────────────────────────────────

function run(cmd, opts = {}) {
  return new Promise((resolve, reject) => {
    exec(cmd, { windowsHide: true, ...opts }, (err, stdout, stderr) => {
      if (err) return reject(new Error((stderr || stdout || err.message || '').toString()));
      resolve((stdout || '').toString());
    });
  });
}

async function extractZip(zipPath, outDir) {
  if (process.platform === 'win32') {
    await run(`powershell -NoProfile -Command "Expand-Archive -Path '${zipPath}' -DestinationPath '${outDir.replace(/\\/g, '/')}' -Force"`);
    return;
  }
  for (const [check, cmd] of [
    ['command -v unzip', `unzip -o '${zipPath}' -d '${outDir}'`],
    ['command -v 7z',    `7z x -y '${zipPath}' -o'${outDir}'`],
    ['busybox unzip -h', `busybox unzip -o '${zipPath}' -d '${outDir}'`],
  ]) {
    try { await run(check); await run(cmd); return; } catch {}
  }
  throw new Error('No unzip tool found (unzip / 7z / busybox). Install one first.');
}

function downloadFile(url, dest, visited = new Set()) {
  return new Promise((resolve, reject) => {
    try {
      if (visited.has(url) || visited.size > MAX_REDIRECTS)
        return reject(new Error('Too many redirects'));
      visited.add(url);
      const client = url.startsWith('https://') ? https : http;
      client.get(url, { headers: { 'User-Agent': 'KuttuBot-Updater/1.0', Accept: '*/*' } }, res => {
        if ([301,302,303,307,308].includes(res.statusCode)) {
          const loc = res.headers.location;
          if (!loc) return reject(new Error(`HTTP ${res.statusCode} without Location`));
          res.resume();
          return downloadFile(new URL(loc, url).toString(), dest, visited).then(resolve).catch(reject);
        }
        if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}`));
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => file.close(resolve));
        file.on('error', err => { try { file.close(() => {}); } catch {} fs.unlink(dest, () => reject(err)); });
      }).on('error', err => { fs.unlink(dest, () => reject(err)); });
    } catch (e) { reject(e); }
  });
}

function copyRecursive(src, dest, ignore = [], relative = '', outList = []) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src)) {
    if (ignore.includes(entry)) continue;
    const s = path.join(src, entry);
    const d = path.join(dest, entry);
    if (fs.lstatSync(s).isDirectory()) {
      copyRecursive(s, d, ignore, path.join(relative, entry), outList);
    } else {
      fs.copyFileSync(s, d);
      outList.push(path.join(relative, entry).replace(/\\/g, '/'));
    }
  }
}

async function updateViaZip(zipUrl, onProgress) {
  const tmpDir    = path.join(process.cwd(), 'tmp');
  const zipPath   = path.join(tmpDir, 'update.zip');
  const extractTo = path.join(tmpDir, 'update_extract');
  if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });

  onProgress('⬇️ Downloading ZIP…');
  await downloadFile(zipUrl, zipPath);

  onProgress('📦 Extracting…');
  if (fs.existsSync(extractTo)) fs.rmSync(extractTo, { recursive: true, force: true });
  await extractZip(zipPath, extractTo);

  // unwrap single root folder (GitHub ZIP format: repo-main/)
  const entries = fs.readdirSync(extractTo);
  const root    = entries.length === 1
    ? path.join(extractTo, entries[0])
    : extractTo;
  const srcRoot = fs.existsSync(root) && fs.lstatSync(root).isDirectory() ? root : extractTo;

  const ignore = ['node_modules','.git','session','tmp','temp','database','config.js'];
  const copied = [];

  onProgress('📋 Copying files…');
  copyRecursive(srcRoot, process.cwd(), ignore, '', copied);

  // check if package.json changed → need npm install
  const pkgChanged = copied.includes('package.json');

  try { fs.rmSync(extractTo, { recursive: true, force: true }); } catch {}
  try { fs.rmSync(zipPath,   { force: true }); } catch {}

  return { copiedFiles: copied, pkgChanged };
}

// ── Heroku Platform API build trigger ────────────────────────────────────────

async function triggerHerokuBuild(apiKey, appName) {
  const body = JSON.stringify({ source_blob: { url: config.updateZipUrl || process.env.UPDATE_ZIP_URL, version: 'update' } });
  return new Promise((resolve, reject) => {
    const req = https.request({
      hostname: 'api.heroku.com',
      path: `/apps/${appName}/builds`,
      method: 'POST',
      headers: {
        'Content-Type':  'application/json',
        'Accept':        'application/vnd.heroku+json; version=3',
        'Authorization': `Bearer ${apiKey}`,
        'Content-Length': Buffer.byteLength(body),
      }
    }, res => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        if (res.statusCode === 201) resolve(JSON.parse(data));
        else reject(new Error(`Heroku API ${res.statusCode}: ${data}`));
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

// ── detect Heroku ─────────────────────────────────────────────────────────────

function isHeroku() {
  return !!(process.env.DYNO || process.env.HEROKU_APP_NAME);
}

// ── main ──────────────────────────────────────────────────────────────────────

module.exports = {
  name: 'update',
  aliases: ['upgrade'],
  category: 'owner',
  description: 'Update bot from GitHub ZIP. On Heroku triggers a rebuild via Platform API.',
  usage: '.update [optional_zip_url]',
  ownerOnly: true,

  async execute(sock, msg, args, extra) {
    const chatId = msg.key.remoteJid;
    const zipUrl = (args[0] || config.updateZipUrl || process.env.UPDATE_ZIP_URL || '').trim();

    if (!zipUrl) {
      return extra.reply(
        '❌ No update URL set.\n' +
        'Add `updateZipUrl` to config.js or pass: `.update <zip_url>`'
      );
    }
    try { new URL(zipUrl); } catch {
      return extra.reply('❌ Invalid URL. Provide a valid ZIP download link.');
    }

    // ── Heroku path ───────────────────────────────────────────────────────────
    if (isHeroku()) {
      const apiKey  = process.env.HEROKU_API_KEY;
      const appName = process.env.HEROKU_APP_NAME;

      if (!apiKey || !appName) {
        return extra.reply(
          '⚠️ *Heroku detected* but `HEROKU_API_KEY` or `HEROKU_APP_NAME` config vars are not set.\n\n' +
          'To enable auto-update on Heroku:\n' +
          '1. Go to Heroku Dashboard → your app → *Settings* → *Config Vars*\n' +
          '2. Add `HEROKU_APP_NAME` = your app name (e.g. `kuttubot-mini`)\n' +
          '3. Add `HEROKU_API_KEY` = your Heroku API key\n' +
          '   _(Account → API Key → Reveal)_\n\n' +
          '_Without these, Heroku filesystem is ephemeral — file updates do not persist after dyno restart._'
        );
      }

      try {
        await extra.reply('🔄 Triggering Heroku rebuild… the bot will restart automatically once the build completes (~2 min).');
        const build = await triggerHerokuBuild(apiKey, appName);
        await sock.sendMessage(chatId, {
          text: `✅ Heroku build triggered!\n` +
                `🆔 Build ID: \`${build.id}\`\n` +
                `📊 Status: ${build.status}\n\n` +
                `_The dyno will restart automatically when the build finishes._`
        }, { quoted: msg });
      } catch (err) {
        console.error('[Update] Heroku build error:', err);
        await sock.sendMessage(chatId, {
          text: `❌ Heroku build trigger failed:\n${err.message}`
        }, { quoted: msg });
      }
      return;
    }

    // ── VPS / Render / Koyeb / non-Heroku path ───────────────────────────────
    try {
      const msgs = [];
      const onProgress = async (text) => {
        try { await sock.sendMessage(chatId, { text }, { quoted: msg }); } catch {}
      };

      await onProgress('🔄 Starting update…');

      const { copiedFiles, pkgChanged } = await updateViaZip(zipUrl, onProgress);

      if (pkgChanged) {
        await onProgress('📦 package.json changed — running `npm install`…');
        try {
          await run('npm install --omit=dev', { cwd: process.cwd(), timeout: 120_000 });
        } catch (e) {
          await onProgress(`⚠️ npm install warning: ${e.message.slice(0, 200)}`);
        }
      }

      const summary =
        `✅ Update complete!\n` +
        `📁 Files copied: ${copiedFiles.length}\n` +
        (pkgChanged ? '📦 Dependencies reinstalled\n' : '') +
        `🔄 Restarting…`;

      await sock.sendMessage(chatId, { text: summary }, { quoted: msg });

      // Restart: pm2 by current process name → else panel auto-restart via exit
      try {
        const pm2App = process.env.name; // pm2 injects this
        if (pm2App) {
          await run(`pm2 restart "${pm2App}"`);
          return;
        }
      } catch {}

      setTimeout(() => process.exit(0), 800);

    } catch (err) {
      console.error('[Update] Error:', err);
      await sock.sendMessage(chatId, {
        text: `❌ Update failed:\n${String(err.message || err)}`
      }, { quoted: msg });
    }
  }
};
