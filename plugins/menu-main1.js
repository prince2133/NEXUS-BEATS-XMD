const config = require('../settings')
const { cmd, commands } = require('../lib/command');
const os = require("os")
const { runtime } = require('../lib/functions')
const axios = require('axios')

cmd({
    pattern: "menu2",
    use: '.menu2',
    category: "main",
    desc: "main menu with bot status and commands",
    react: "📃",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, pushname, reply }) => {
    try {
        let status = `*╭━━〘 ＮＥＸＵＳ ＢＥＡＴＳ ＸＭＤ 〙━━►*
*┃◈╭───────────────────·๏*
*┃◈┃➩ 👋 Usᴇʀ Nᴀᴍᴇ* : *${pushname}*
*┃◈┃➩ ❗ Uᴘ Tɪᴍᴇ -* *${runtime(process.uptime())}*
*┃◈┃➩ ❗ Rᴀᴍ Uꜱᴇɢᴇ -* *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB*
*┃◈┃➩ ⚙️ Cʀᴇᴀᴛᴏʀ* : *Dᴀʀᴋ Tᴇᴄʜ Zᴏɴᴇ™ & Zᴇʀᴏ Tʀᴀᴄᴇ™*
*┃◈┃➩ 🎭 Vᴇʀsɪᴏɴ* : *v1.0.0*
*┃◈└──────────────────┈⊷*
*╰━━━━━━━━━━━━━━━━━━━━━━━━━►*

*╭━━〘 ＭＡＩＮ ＣＯＭＭＡＮＤＳ 〙━━►*
*┃❍╭──────────────────·๏*
*┃❍┃• 1. Mᴇɴᴜ*
*┃❍┃• 2. Aʟɪᴠᴇ*
*┃❍┃• 3. Pɪɴɢ*
*┃❍┃• 4. Rᴇꜱᴛᴀʀᴛ*
*┃❍┃• 5. Sʏꜱᴛᴇᴍ*
*┃❍┃• 6. Fᴏʀᴡᴀʀᴅ <ᴛʏᴘᴇ ʏᴏᴜʀ ᴊɪᴅ>*
*┃❍└────────────────┈⊷*
*╰━━━━━━━━━━━━━━━━━━━━━━━━►*

*╭━━〘 ＤＯＷＮＬＯＡＤ ＣＭＤＳ 〙━━►*
*┃❍╭──────────────────·๏*
*┃❍┃• 7. Vᴏɪᴄᴇ <ʏᴛ ᴠɪᴅᴇᴏ ɴᴀᴍᴇ ᴏʀ ᴜʀʟ>*
*┃❍┃• 8. VᴏɪᴄᴇSᴇɴᴅ <ʏᴛ ᴠɪᴅᴇᴏ ɴᴀᴍᴇ ᴏʀ ᴜʀʟ>*
*┃❍┃• 9. Sᴏɴɢ <ʏᴛ ᴠɪᴅᴇᴏ ɴᴀᴍᴇ ᴏʀ ᴜʀʟ>*
*┃❍┃• 10. Sᴏɴɢ2 <ʏᴛ ᴠɪᴅᴇᴏ ɴᴀᴍᴇ ᴏʀ ᴜʀʟ>*
*┃❍┃• 11. Sᴏɴɢ3 <ʏᴛ ᴠɪᴅᴇᴏ ɴᴀᴍᴇ ᴏʀ ᴜʀʟ>*
*┃❍└────────────────┈⊷*
*╰━━━━━━━━━━━━━━━━━━━━━━━━►*

*╭━━━〘 ＳＥＴＴＩＮＧ ＣＭＤＳ 〙━━━►*
*┃❍╭───────────────────·๏*
*┃❍┃• 12. SᴇᴛPʀᴇꜰɪx <ᴘʀᴇꜰɪx>*
*┃❍┃• 13. SᴇᴛLᴏɢᴏ <ʟᴏɢᴏ ᴜʀʟ>*
*┃❍┃• 14. SᴇᴛJɪᴅ <ᴊɪᴅ>*
*┃❍┃• 15. SᴇᴛFᴏᴏᴛᴇʀ <ꜰᴏᴏᴛᴇʀ>*
*┃❍┃• 16. SᴇᴛOᴡɴᴇʀNʙ <ꜱᴜᴅᴏ>*
*┃❍┃• 17. SᴇᴛWᴀCʜᴀɴɴᴇʟ <ᴄʜᴀɴɴᴇʟ ʟɪɴᴋ>*
*┃❍┃• 18. OɴʟʏMᴇ <ᴏɴ/ᴏꜰꜰ>*
*┃❍┃• 19. OɴʟʏGʀᴏᴜᴘ <ᴏɴ/ᴏꜰꜰ>*
*┃❍└─────────────────┈⊷*
*╰━━━━━━━━━━━━━━━━━━━━━━━━━►*

> *㊛ Ꮲᴏꪝᴇʀᴅ Вʏ ᴅᴛᴢ™ & ᴛᴢᴛ™*`;

        const thumb = await axios.get('https://files.catbox.moe/f03jco.jpg', { responseType: 'arraybuffer' });

        // Send video and status message
        await conn.sendMessage(from, {
            video: { url: 'https://files.catbox.moe/h3u0el.mp4' },
            caption: status,
            contextInfo: {
                mentionedJid: ['94760091093@s.whatsapp.net'],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363395467876104@newsletter',
                    newsletterName: "ＮＥＸＵＳ ＢＥＡＴＳ ＸＭＤ",
                    serverMessageId: 999
                },
                externalAdReply: {
                    title: 'NEXUS-BEATS-XMD',
                    body: 'Dᴀʀᴋ Tᴇᴄʜ Zᴏɴᴇ™ & Zᴇʀᴏ Tʀᴀᴄᴇ™',
                    mediaType: 1,
                    sourceUrl: 'https://whatsapp.com/channel/0029Vb9u0GQ8qIzmoGPEtq0s',
                    thumbnail: Buffer.from(thumb.data),
                    renderLargerThumbnail: true,
                    showAdAttribution: true
                }
            }
        }, { quoted: mek });

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/TECH-HORIZON-OWNER/PROJECT-FSD/raw/refs/heads/main/audio/AUD-20250323-WA0003.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in menu3 command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});