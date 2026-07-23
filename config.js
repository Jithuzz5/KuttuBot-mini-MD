/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['917034898741','917034898741'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Kuttu Bot Mini', 'Goutham Josh'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Kuttu Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'SESSION_ID=eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0xqQXpRMzM4d21xNENKSVpmdXlOd0Zaa3VkNGM3Y0cyeXNqTHNMU0wxZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVkJSQklnVWJrWlFSRkNXbm1BUUJCamZ6UEhSUmhaRG43bEhNUXpuZFZTZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0Q2ZmakFVSlFoRGF3KzZyTS9YWlI2d1pFSGlwVngvRnZ1V2gxSHRnYm1nPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTODYyU2VLT2xXR1RGajNXUm93ZkZ3L2tBWXlpUEVUbzE0ODF5NG4xSGdZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNCMjIrWDJ3UDlPWFJsUWdGc2RRcENTSzZvTlJzT0hrQ0NSWU5JWHpzMlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBvS0xZMzMvT0RrbWYrMHJEOHJGSDBUZG1KRnF1dG1LOFV1cG9CQ0h4Z009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkpSMW9PdW5yT004R1ZYQjZNMnNpczRpOFhFMkFXTUc5K2dhVlJNZkduMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMGNTS2ppcGorcmxiZmZZTlhJa1ljZCs4TEVZcGRkYnRhSDBRSlFZSU5TQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imt0Y2ZmUGFKMGhWTjZ5VFgxbWlsYmUrQ2dtMGJyc0pvNTdIaXJvREQrTnpqVTF4K0djVmVlN1QrYzJqUXhtQWNselo4VTZNajQ5Y0c1QXpDbDVjOWlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY1LCJhZHZTZWNyZXRLZXkiOiIwV2hkK1RvSUxxdFFyR2FpdHdPRFRFNHl2REF0b09XYTJ6Vjc3TDJ1UGxBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6ZmFsc2UsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUJRZ04ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tUWTJkb0JFSVNqaHRNR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InFabW5vYWN2bFlVdEhaWXlaYW0wMDl6KzJnMUtrbTlSei9MY0NkMlR5Mmc9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImxOby9yM0tPZ01UcS9ZRWpPT2ZuMFVySXNBcUx2L1BmeTR3MnlkNUY0THI5NnhPUDlXMnpTK3pPYXltV2pDdUEzZEQxOGFxSHByb0hrTDNxa2h5Y0FRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJpQjB5ZUlRZkNrdENSRmdNZzl6RjU5eXV2V1pKeVB3MXJ5TjVCM1ZmaVdDTGFXUEsxVGFJejNZbFk4elNDZllXNkF3RXNJNnE4V2p4d3ZXUkovWFRnUT09In0sIm1lIjp7ImlkIjoiOTE2MjM4NDM1NTY4OjEwQHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxNjIzODQzNTU2ODoxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhbVpwNkduTDVXRkxSMldNbVdwdE5QYy90b05TcEp2VWMveTNBbmRrOHRvIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzg0Nzc5MTQ2fQ==',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/GouthamSER/KuttuBot-mini-MD/archive/refs/heads/main.zip', // Used for local/VPS update (ZIP)
    updateTarUrl: 'https://github.com/GouthamSER/KuttuBot-mini-MD/archive/refs/heads/main.tar.gz', // Used for Heroku build trigger (tar.gz required by Platform API)
    
    // Sticker Configuration
    packname: 'Kuttu Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/GouthamSER',
      instagram: 'https://instagram.com/im_goutham_josh',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/GouthamSER',
      instagram: 'https://instagram.com/im_goutham_josh',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
