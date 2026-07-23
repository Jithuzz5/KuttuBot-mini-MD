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
    sessionID: process.env.SESSION_ID || 'SESSION_ID=eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkF2a290Z2pRZlpJc2EvVFBleUtmUGNqOXViMjJIdVl3VVR3dlQxTDdFOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibTF0UTlZbFV6ZjdjR0J4emJjK3A5UGY0b0hvcXBWd3lSMXZVNkhLQm9sWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZQ1hYcU5nY3hORVNGV0wxMVJrVk9mc3NhdGJQUWNFQXRuNnBTOTJRMFZVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1cTRscUMxMW5MdUNtS2FBWWhRaitmT3FhQXJVUmhmVGNDWTRLQXJkalJZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklNOEZpMkYwei9UQndKK0pNbExIc3c1aWluMjQvcDlBVE5nS2tpUWtUbUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldjdUZNbHJaQzhXVlhiYmZaQ1J4eWZqeXNkQjFZYWVaVldsbmhLaW1UMms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia09SUjVZTU13dW1MUDlZeExxZzN1OTJIR1pHOElVNWVBdjZrY0NvTXYzND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVG9GbWRBSWpEbVphSU5VQU1IZi94dWo3N1F5cGFlUnF3UXo1QkpzVzkzTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImErSE9VRGtTSlNhQzZiZnRIWGt2cTAyWUpOQXdEbHU1cGdLTTFPcGZsK3QyRFlQTUFKOFJ0L1krVGd2M3pLSUhtOFRkTDRhSE9zR0x0MFdqK1dLU0JBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ0LCJhZHZTZWNyZXRLZXkiOiJac29oOWU4Z0ZxTUhGbUdSYnJIbzl3MDBBd1NNTll6VTNYMGJQTlVXTTNBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiI3UE45NjhLSyIsIm1lIjp7ImlkIjoiOTE2MjM4NDM1NTY4OjlAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tUWTJkb0JFUGFMaHRNR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InFabW5vYWN2bFlVdEhaWXlaYW0wMDl6KzJnMUtrbTlSei9MY0NkMlR5Mmc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkpwakdKNTFTSFpzUFY5MUVvb2tXRkpYbi9QTklDK05HZjE0SUQydStlM1A2TjFYTHhNUExLZWRwZWZsNXJJVGJBMk5pV0d6N0Y2dnNBUmJBWlYxWUNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJXZmZWdzVHbGhtdDV0NStwQjZPQXFZTzczY1pobVZnNUN1TXNKcUsya2VhYzJIMGtRRDhLWXFKcVVqQlRIR2dCdHU0N3pkWUM2MWF6UGgzYzJMeVhDQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxNjIzODQzNTU2ODo5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFtWnA2R25MNVdGTFIyV01tV3B0TlBjL3RvTlNwSnZVYy95M0FuZGs4dG8ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lCUWdOIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc4NDc3NjE4Nn0=',
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
