/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['917034898741','917023951514'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Kuttu Bot Mini', 'Goutham Josh'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Kuttu Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU246jRhD9lahfba25Y1saKRiDYTAYG9+jfWhDA21z7waMV/PvEXPJbKRkM3lriqo6p06d7h8gyzFBFurA9AcoKtxAivoj7QoEpmBWhyGqwBAEkEIwBYLd1TY6OSTWSHHyZE8ks0uaS8VZqs6FnUZts+cIo3iL3RN4GYKiviTY/0XDUdQ9R/Ve5XUirIwuOVB+Hspbg6A2VE6yNDASKG8WshwzT+Cl7whxhbNIK2KUogomFupciKuv0VfmToVYSV6GDuflFmdZaVAE2xIr/rPf2ZdDY1Eb7gc3Vvsa/TAoj9npMNqcyH7LDeymUdmVfD9J913+7OhRe1hKR8uujrzyRp/gKEOBGaCMYtp9WXfflaR6Ny6M3Cm5opxJNBF0N8aDsVayu71rjOPbAtktOkZfI54oDhyh44oTt8lpdGAjc6PDJq4o69qDwCV0nVe8vnQu+78Rd6sPr9z+j+6c9sD+zlbLiNHk4kwC3smcpV0rdyLXbjO5FK52qCLsJv7X6N/Fw+Z41o1FfTyEHMXe2uUXD7idYRy1JTaxd1RxWqaPzvykD2ld/YrlXVvdKfFofb654+18y4qhORI6tZWSe6JwqbAppXUmDSIp8pM7L68gzgOL1f2BuBcrYZ7x+oXzzoZAJqqfBJXv2XSmPL1OdEOdGYAp+zIEFYowoRWkOM/6mDAeAhg0HvIrRF/VBcXpkTHz/aZJ6bFL0OQQqoI8Y9T7dXKo60tbCSq/xe3eafInMARFlfuIEBQYmNC86mxECIwQAdM/vg9Bhu70bW89Gs8OQYgrQndZXSQ5DD6W+vET+n5eZ9TrMl/tD6gCU+YzjCjFWUR6GesMVn6MG6TGkBIwDWFC0F8DogoF77EhqPK6LzOzMP/FAtSZac7XkdoL9o7XZweIQpyQPsFyFzLdGZobUmmiLBaKFilqpIBPfh97fhOSK93zIQ4Vvl3Zm260I+i09Ty91XG4sFZcd0sLpWRPKE1PT//QBEzBJt87J8Vcy4llpLqZXVeZeTjOxPixvK551ZZTc7Ir3EDk7+rjIoyMq8VBh/D8GIWL8GFSevEJGhUj53Y9+8dCYPSb2j71aAFqsI9+BrPLLFrnA25AFvmuYrRHx22MwRnvn7P11hJ4MZgLcoab0GfjnBEindHmUXHW581yxdLHbJ3P5tHDe3QW5pfSOZCK3J+1bw5MX62PAzAFE1ZmeGE8GcsCO2Unv5Nvbb9BWBTfMkTBEGSwzwaLvKYxTH97zkkMhiB5LR6LY4YRJyIni/JE6Mv7+McVS96fNvzqvh6v/wwxen0p3vv+J/6bMr0jmZfhTz3e355/sc8sKK/cPj+2znh+1fyGXRqpxtxif3bK7vhKSfFcri16MIoiBS8v34egSCAN8yoFU0DSC+xnhIQqnzdgi1NEKEwLMGXlMcOKHCNxL38CM/zM3jYHAAA=',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
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
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/im_goutham_josh',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
