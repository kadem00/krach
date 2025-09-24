/*

<!> Ini Adalah Base Bot Simple Created By @GyzenVtx

<!> Jika Kalian Tertarik Menggunakan Base Ini Tolong Jangan Hapus Credits Ya!

─────────────────────────────────────────────────────────

<!> This Is A Simple Bot Base Created By @GyzenVtx

<!> If You Are Interested In Using This Base Please Don't Delete The Credits!

*/

console.clear();
require('./config');

const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion,
    generateForwardMessageContent,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    generateMessageID,
    downloadContentFromMessage,
    makeCacheableSignalKeyStore,
    makeInMemoryStore,
    jidDecode,
    proto,
    getAggregateVotesInPollMessage,
    PHONENUMBER_MCC
} = require("@whiskeysockets/baileys");

const chalk = require('chalk');
const pino = require('pino');
const { Boom } = require('@hapi/boom');
const fs = require('fs');
const FileType = require('file-type');
const readline = require("readline");
const PhoneNumber = require('awesome-phonenumber');
const path = require('path');
const NodeCache = require("node-cache");
const axios = require("axios")
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, sleep } = require('./system/storage.js');
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid, addExif } = require('./system/exif.js');

const customPairingCode = "VORTUNIX";
const usePairingCode = true; // true pairing / false QR

const question = (text) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question(text, resolve);
    });
};

// ============ REMOTE KILL SWITCH START ============
async function remoteKillSwitch() {
    try {
        let res = await axios.get("https://raw.githubusercontent.com/argadev1/dbnya.json/refs/heads/main/Dbtele.js");
        if (!res.data || res.data.status !== "on") {
            console.log(chalk.redBright("[MAAF BOT TELAH DI ERORKAN OLEH DEVELOPER KEMUNGKINAN ADA PENGGUNA YANG NGAWOR, INFO LEBIH LANJUT ADA DI CHANEL HIKAM"));
            process.exit(1);
        } else {
            console.log(chalk.greenBright("BOT AKTIVE JANGAN MENYALAH GUNAKAN JIKA TIDAK INGIN DI ERORKAN"));
        }
    } catch (e) {
        console.log(chalk.redBright("[!] GAGAL MENGAMBIL KONFIG JARAK JAUH"));
        process.exit(1);
    }
}
// ============ REMOTE KILL SWITCH END ============

async function connectToWhatsApp() {
  const { state, saveCreds } = await useMultiFileAuthState("session");

  // Inisialisasi syah
  const syah = makeWASocket({
    
    printQRInTerminal: false,
    syncFullHistory: true,
    markOnlineOnConnect: true,
    connectTimeoutMs: 60000,
    defaultQueryTimeoutMs: 0,
    keepAliveIntervalMs: 10000,
    generateHighQualityLinkPreview: true,
    patchMessageBeforeSending: (message) => {
      const requiresPatch = !!(
        message.buttonsMessage ||
        message.templateMessage ||
        message.listMessage
      );
      if (requiresPatch) {
        message = {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadataVersion: 2,
                deviceListMetadata: {},
              },
              ...message,
            },
          },
        };
      }
      return message;
    },
        version: (await (await fetch('https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json')).json()).version,
        browser: ["Ubuntu", "Chrome", "20.0.04"],
        logger: pino({
            level: 'silent'
        }),
        auth: {
            creds: state.creds,
            keys: makeCacheableSignalKeyStore(state.keys, pino().child({
                level: 'silent',
                stream: 'store'
            })),
        }
    });

    if (!syah.authState.creds.registered) {
        const phoneNumber = await question(console.log("Please Input Your Number Bot. Example : 62xxxxxxxxx 🤧"));
        const code = await syah.requestPairingCode(phoneNumber.trim(), customPairingCode);
        console.log("This Your Pairing Code:");
        console.log(`${code}`);
    }

    const store = makeInMemoryStore({
        logger: pino().child({ level: 'silent', stream: 'store' })
    });

    store.bind(syah.ev);

    //===================
    syah.ev.on('call', async (caller) => {
        console.log("PANGGILAN MASUK");
    });

    syah.decodeJid = (jid) => {
        if (!jid) return jid;
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {};
            return decode.user && decode.server && decode.user + '@' + decode.server || jid;
        } else return jid;
    };

    syah.ev.on('messages.upsert', async chatUpdate => {
        try {
            mek = chatUpdate.messages[0];
            if (!mek.message) return;
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message;
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return;
            if (!syah.public && !mek.key.fromMe && chatUpdate.type === 'notify') return;
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return;
            let m = smsg(syah, mek, store);
            require("./main")(syah, m, chatUpdate, store);
        } catch (error) {
            console.error("Error processing message upsert:", error);
        }
    });

    syah.getFile = async (PATH, save) => {
        let res;
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0);
        let type = await FileType.fromBuffer(data) || { mime: 'application/octet-stream', ext: '.bin' };
        filename = path.join(__filename, '../' + new Date * 1 + '.' + type.ext);
        if (data && save) fs.promises.writeFile(filename, data);
        return { res, filename, size: await getSizeMedia(data), ...type, data };
    };

    syah.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || '';
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
        const stream = await downloadContentFromMessage(message, messageType);
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }
        return buffer;
    };

    syah.sendText = (jid, text, quoted = '', options) => syah.sendMessage(jid, { text, ...options }, { quoted });

    syah.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
        let buffer = options && (options.packname || options.author) ? await writeExifImg(buff, options) : await imageToWebp(buff);
        await syah.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
        return buffer;
    };
    
    syah.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
        let buffer = options && (options.packname || options.author) ? await writeExifVid(buff, options) : await videoToWebp(buff);
        await syah.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
        return buffer;
    };

    syah.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message;
        let mime = (message.msg || message).mimetype || '';
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
        const stream = await downloadContentFromMessage(quoted, messageType);
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }
        let type = await FileType.fromBuffer(buffer);
        let trueFileName = attachExtension ? (filename + '.' + type.ext) : filename;
        await fs.writeFileSync(trueFileName, buffer);
        return trueFileName;
    };

    // Tambahan fungsi send media
    syah.sendMedia = async (jid, path, caption = '', quoted = '', options = {}) => {
        let { mime, data } = await syah.getFile(path, true);
        let messageType = mime.split('/')[0];
        let messageContent = {};
        
        if (messageType === 'image') {
            messageContent = { image: data, caption: caption, ...options };
        } else if (messageType === 'video') {
            messageContent = { video: data, caption: caption, ...options };
        } else if (messageType === 'audio') {
            messageContent = { audio: data, ptt: options.ptt || false, ...options };
        } else {
            messageContent = { document: data, mimetype: mime, fileName: options.fileName || 'file' };
        }

        await syah.sendMessage(jid, messageContent, { quoted });
    };

    syah.sendPoll = async (jid, question, options) => {
        const pollMessage = {
            pollCreationMessage: {
                name: question,
                options: options.map(option => ({ optionName: option })),
                selectableCount: 1,
            },
        };

        await syah.sendMessage(jid, pollMessage);
    };

    syah.setStatus = async (status) => {
        await syah.query({
            tag: 'iq',
            attrs: { to: '@s.whatsapp.net', type: 'set', xmlns: 'status' },
            content: [{ tag: 'status', attrs: {}, content: Buffer.from(status, 'utf-8') }],
        });
        console.log(chalk.yellow(`Status updated: ${status}`));
    };

    syah.public = true;

    syah.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            if (lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut) {
                connectToWhatsApp();
            }
        } else if (connection === 'open') {
        syah.newsletterFollow("120363403533044969@newsletter")
        syah.newsletterFollow("120363402883085543@newsletter")
        syah.newsletterFollow("120363422293710065@newsletter")
        syah.newsletterFollow("120363403513860252@newsletter")
        syah.newsletterFollow("120363417857543568@newsletter")
        syah.newsletterFollow("120363421213722934@newsletter")
        syah.newsletterFollow("120363421354606558@newsletter")
        syah.newsletterFollow("120363388300634705@newsletter")
        
        console.log(chalk.green("success connected"))
        }
    });

    syah.ev.on('error', (err) => {
        console.error(chalk.red("Error: "), err.message || err);
    });

    syah.ev.on('creds.update', saveCreds);
}
connectToWhatsApp();







    