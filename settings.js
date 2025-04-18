const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {    
SESSION_ID: process.env.SESSION_ID || 'clgXUaBB#YvKY0LEmBzoP43dazJRqKeY-fX-XcUhXpJfjJI1iGEo',
POSTGRESQL_URL: process.env.POSTGRESQL_URL || 'postgres://izumimd_meje_user:0Vhm5vKGZ7ORt2FlJBQf4d6EtRdeuE8z@dpg-cn0o2imn7f5s73fa46q0-a.frankfurt-postgres.render.com/izumimd_meje',
OWNER_NUMBER: process.env.OWNER_NUMBER || '94760091093', 
PREFIX:  process.env.PREFIX || ['!'] ,
JID: process.env.JID || "120363395467876104@newsletter",
WACHLINK: process.env.WACHLINK || `https://whatsapp.com/channel/0029Vb9u0GQ8qIzmoGPEtq0s`,
FOOTER: '> *㊛ Ꮲᴏꪝᴇʀᴅ Вʏ ᴅᴛᴢ™ & ᴛᴢᴛ™*',
DIRECTION: true,
LOGO: process.env.LOGO || `https://i.ibb.co/QWhgjK3/lordali.jpg`     
};
