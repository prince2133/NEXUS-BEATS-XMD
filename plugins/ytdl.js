/*
ʏᴏᴜᴛᴜʙᴇ ᴍᴘ3 ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ᴘʟᴜɢɪɴ
ᴄʀᴇᴀᴛᴇᴅ ʙʏ :  𝙲𝚈𝙱𝙴𝚁 𝙰𝚂𝙷𝚄𝚄 𝙾𝙵𝙲
contact me 94760091093
ᴘʟᴇᴀꜱᴇ ᴅᴏɴᴛ ʀᴇᴍᴏᴠᴇ ᴏᴡɴᴇʀ ᴄʀᴇᴅɪᴛꜱ 💀📍
*/

const { cmd, commands } = require('../lib/command');
const yts = require('yt-search');
const ddownr = require('denethdev-ytmp3'); // Importing the denethdev-ytmp3 package for downloading

cmd({
  pattern: "song",
  desc: "Download songs.",
  category: "download",
  react: '🎧',
  filename: __filename
}, async (messageHandler, context, quotedMessage, { from, reply, q }) => {
  try {
    if (!q) return reply("*Please Provide A Song Name or Url 🙄*");
    
    // Search for the song using yt-search
    const searchResults = await yts(q);
    if (!searchResults || searchResults.videos.length === 0) {
      return reply("*No Song Found Matching Your Query 🧐*");
    }

    const songData = searchResults.videos[0];
    const songUrl = songData.url;

    // Using denethdev-ytmp3 to fetch the download link
    const result = await ddownr.download(songUrl, 'mp3'); // Download in mp3 format
    const downloadLink = result.downloadUrl; // Get the download URL

    let songDetailsMessage = `*〘 ＹＯＵＴＵＢＥ ＡＵＤＩＯ ＤＬ 〙*\n\n*◈=========================◈*\n\n*╭┈──────────────────┈⊷*\n`;
    songDetailsMessage += `*┃* 🎶 *Title:* *${songData.title}*\n`;
    songDetailsMessage += `*┃* 👀 *Views:* *${songData.views}*\n`;
    songDetailsMessage += `*┃* ⏳ *Duration:* *${songData.timestamp}*\n`;
    songDetailsMessage += `*┃* 📆 *Uploaded:* *${songData.ago}*\n`;
    songDetailsMessage += `*┃* 📽 *Channel:* *${songData.author.name}*\n`;
    songDetailsMessage += `*┃* 🖇 *URL:* *${songData.url}*\n*╰────────────────────┈⊷*\n\n*⦁⦂⦁━┉━┉━┉━┉━┉━┉━┉━┉━┉━⦁⦂⦁*\n\n`;
    songDetailsMessage += `*Choose Your Download Format:*\n\n*╭┈─────────────────┈⊷*\n`;
    songDetailsMessage += `*┃1 │❯❯◦ Audio File 🎶*\n`;
    songDetailsMessage += `*┃2 │❯❯◦ Voice File 🎤*\n`;
    songDetailsMessage += `*┃3 │❯❯◦ Document File 📂*\n*╰───────────────────┈⊷*\n\n`;
    songDetailsMessage += `> *㊛ Ꮲᴏꪝᴇʀᴅ Вʏ Nᴇxᴜꜱ Bᴇᴀᴛꜱ Xᴍᴅ*`;

    // Send the video thumbnail with song details
    const sentMessage = await messageHandler.sendMessage(from, {
      image: { url: songData.thumbnail },
      caption: songDetailsMessage,
    }, { quoted: quotedMessage });

    // Listen for the user's reply to select the download format
    messageHandler.ev.on("messages.upsert", async (update) => {
      const message = update.messages[0];
      if (!message.message || !message.message.extendedTextMessage) return;

      const userReply = message.message.extendedTextMessage.text.trim();

      // Handle the download format choice
      if (message.message.extendedTextMessage.contextInfo.stanzaId === sentMessage.key.id) {
        switch (userReply) {
          case '1': // Audio File
            await messageHandler.sendMessage(from, {
              audio: { url: downloadLink },
              mimetype: "audio/mpeg"
            }, { quoted: quotedMessage });
            break;
          case '2': // Audio File
            await messageHandler.sendMessage(from, {
              audio: { url: downloadLink },
              mimetype: "audio/mpeg", ptt: true
            }, { quoted: quotedMessage });
            break;
          case '3': // Document File
            await messageHandler.sendMessage(from, {
              document: { url: downloadLink },
              mimetype: 'audio/mpeg',
              fileName: `${songData.title}.mp3`,
              caption: `> *${songData.title}🎶*\n\n\n *${songData.title}🎶*\n\n> *㊛ Ꮲᴏꪝᴇʀᴅ Вʏ Nᴇxᴜꜱ Bᴇᴀᴛꜱ Xᴍᴅ*`
            }, { quoted: quotedMessage });
            break;
          default:
            reply("*Invalid Option. Please Select A Valid Option 💀*");
            break;
        }
      }
    });
  } catch (error) {
    console.error(error);
    reply("*An Error Occurred While Processing Your Request 💀*");
  }
});