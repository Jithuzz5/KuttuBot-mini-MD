/**
 * ToMP3 Command
 * Convert a replied video (or audio) message to an MP3 audio file
 * Triggers: .mp3 | .tomp3
 */

const { downloadMediaMessage } = require('@whiskeysockets/baileys');
const { toAudio } = require('../../utils/converter');
const { getTempDir, deleteTempFile } = require('../../utils/tempManager');
const path = require('path');
const fs = require('fs');

// Map Baileys message types → input extension for ffmpeg
const EXT_MAP = {
  videoMessage:    'mp4',
  audioMessage:    'mp3',
  documentMessage: 'mp4',   // treat unknown docs as mp4; ffmpeg will handle it
};

module.exports = {
  name: 'mp3',
  aliases: ['tomp3'],
  description: 'Convert a video (or audio) to an MP3 audio file',
  usage: '.mp3 (reply to a video / audio)',
  category: 'media',

  async execute(sock, msg, args, extra) {
    const chatId = extra.from;

    // ── 1. Resolve target message (support reply-to-quoted) ──────────────────
    let targetMsg = msg;
    const ctxInfo = msg.message?.extendedTextMessage?.contextInfo;
    if (ctxInfo?.quotedMessage) {
      targetMsg = {
        key: {
          remoteJid: chatId,
          id: ctxInfo.stanzaId,
          participant: ctxInfo.participant,
        },
        message: ctxInfo.quotedMessage,
      };
    }

    // ── 2. Find supported media ───────────────────────────────────────────────
    const msgContent = targetMsg.message || {};
    const mediaType = Object.keys(EXT_MAP).find(t => msgContent[t]);

    if (!mediaType) {
      return extra.reply(
        '🎵 Reply to a *video* or *audio* message with *.mp3* to convert it.\n\n' +
        '_Example: reply to a video → .mp3_'
      );
    }

    // ── 3. React + status ─────────────────────────────────────────────────────
    await extra.react('⏳');

    // ── 4. Download media buffer ──────────────────────────────────────────────
    let mediaBuffer;
    try {
      mediaBuffer = await downloadMediaMessage(
        targetMsg,
        'buffer',
        {},
        { logger: console, reuploadRequest: sock.updateMediaMessage }
      );
    } catch (dlErr) {
      await extra.react('❌');
      return extra.reply('❌ Failed to download the media. Please try again.');
    }

    if (!mediaBuffer || mediaBuffer.length === 0) {
      await extra.react('❌');
      return extra.reply('❌ Downloaded media is empty. Please try a different file.');
    }

    // ── 5. Convert to MP3 via ffmpeg ──────────────────────────────────────────
    const inputExt = EXT_MAP[mediaType];
    let mp3Buffer;
    try {
      mp3Buffer = await toAudio(mediaBuffer, inputExt);
    } catch (convErr) {
      console.error('[ToMP3] Conversion error:', convErr);
      await extra.react('❌');
      return extra.reply('❌ Conversion failed. Make sure the file is a valid video/audio.');
    }

    if (!mp3Buffer || mp3Buffer.length === 0) {
      await extra.react('❌');
      return extra.reply('❌ Conversion produced an empty file.');
    }

    // ── 6. Build a filename from caption / sender ─────────────────────────────
    const caption =
      msgContent[mediaType]?.caption ||
      msgContent[mediaType]?.fileName ||
      '';
    const baseName = caption
      ? caption.replace(/\.[^.]+$/, '').replace(/[^\w\s-]/g, '').trim().slice(0, 60)
      : `audio_${Date.now()}`;
    const fileName = `${baseName}.mp3`;

    // ── 7. Send as audio document (downloadable MP3) ──────────────────────────
    await sock.sendMessage(
      chatId,
      {
        audio: mp3Buffer,
        mimetype: 'audio/mpeg',
        fileName,
        ptt: false,
      },
      { quoted: msg }
    );

    await extra.react('✅');
  },
};
