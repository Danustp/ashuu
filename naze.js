require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const os = require('os')
const util = require('util')
const path = require('path')
const hx = require('hxz-api')
const axios = require('axios')
const chalk = require('chalk')
const yts = require('yt-search')
const xfar = require('xfarr-api')
const google = require('google-it')
const maker = require('mumaker')
const naztod = require("tod-api")
const request = require('request');
const textpro = require('./lib/textpro')
const bochil = require('@bochilteam/scraper')
const { mediafireDl } = require('./lib/mediafire.js')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')

const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const hariiini = moment.tz('Asia/Jakarta').format('DD MMMM YYYY')
const barat = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const tengah = moment.tz('Asia/Makassar').format('HH:mm:ss')
const timur = moment.tz('Asia/Jayapura').format('HH:mm:ss')
const nyoutube = (`\nPowered by ${ownername}\nIG: www.instagram.com/yanz_5008`)
const ini_mark = `0@s.whatsapp.net`
const ownernya = ownernomer + '@s.whatsapp.net'
global.prem = require("./lib/premium")
gambar = fs.readFileSync('./media/image/naze.jpg')

//TIME
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Sore'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Pagi'
 } 
 
// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []
let timestamp = speed()
let latensi = speed() - timestamp

module.exports = naze = async (naze, m, chatUpdate, store) => {
 try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const arg = body.substring(body.indexOf(" ") + 1);
        const pushname = m.pushName || "No Name"
        const botNumber = await naze.decodeJid(naze.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
	    
        // Group
        const groupMetadata = m.isGroup ? await naze.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isPremium = isCreator || isCreator || prem.checkPremiumUser(m.sender, premium);
  function pickRandom(list) { return list[Math.floor(list.length * Math.random())]}
	    const klqor = ['😁','🥰','😇','🥲','🙃','🙂','🤑','😑','♻️','🔞','✅','🙏','❤','🔴','❗','〽️','🎶','🤗','👤','🔎','🔋','📚','🎬','🐵','🐒','🐦','🍌','🍎','🥝','🥒','🫓','🍒','🍐','🥦','🌍','🌎','🎃','🎄','🥎','🎖','🏆','🏅','🥇','🥈','🥉','🎗','🎟','🎫','🎁','🎀','👑','💎','⚠️']
	    const kloadq = klqor[Math.floor(Math.random() * klqor.length)]
	    const filsj = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf']
	    const filsk = filsj[Math.floor(Math.random() * filsj.length)]
	
	 try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
            if (!isNumber(user.afkTime)) user.afkTime = -1
            if (!('afkReason' in user)) user.afkReason = ''
            if (!isNumber(user.limit)) user.limit = limitUser
             } else global.db.data.users[m.sender] = {
            afkTime: -1,
            afkReason: '',
            limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
            if (!('mute' in chats)) chats.mute = false
            if (!('antilink' in chats)) chats.antilink = true
            } else global.db.data.chats[m.chat] = {
            mute: false,
            antilink: true,
            }
		
	    let setting = global.db.data.settings[botNumber]
        if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = true
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false	
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: true,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
	    }} catch (err) {console.error(err)}
        
// Public & Self
if (!naze.public) {
if (!m.key.fromMe) return }
if (m.message) {naze.readMessages([m.key])}
if (m.text.includes('🙏🏻')) {naze.sendMessage(m.chat, {react: {text: '🙏🏻', key: m.key }})}
if (m.text.includes('🤤')) {naze.sendMessage(m.chat, {react: {text: '🤤', key: m.key }})}
if (m.text.includes('😭')) {naze.sendMessage(m.chat, {react: {text: '😭', key: m.key }})}
if (m.text.includes('🥰')) {naze.sendMessage(m.chat, {react: {text: '🥰', key: m.key }})}
if (m.text.includes('🗿')) {naze.sendMessage(m.chat, {react: {text: '🗿', key: m.key }})}
 
//=====[ AUTO REPLAY ]=====\\
if (budy == 'P') {
let buttons = [{ buttonId: 'bilek2', buttonText: { displayText: '\nGw gak mau salam, gw mau jujur nih ya, gw sebenarnya memang gak punya agama🙏🏻' }, type: 1 }]
await naze.sendButtonText(m.chat, buttons, `𝗽𝗮𝗽𝗲𝗽𝗮𝗽𝗲, 𝗴𝗮𝗸 𝗽𝘂𝗻𝘆𝗮 𝗮𝗴𝗮𝗺𝗮 𝗸𝗮𝗵 𝗸𝗮𝗸 ?\n \n𝘈𝘺𝘰 𝘴𝘢𝘭𝘢𝘮 𝘥𝘶𝘭𝘶 𝘬𝘢𝘬..`, naze.user.name, m)}
if (budy == 'p') {
let buttons = [{ buttonId: 'bilek2', buttonText: { displayText: '\nGw gak mau salam, gw mau jujur nih ya, gw sebenarnya memang gak punya agama🙏🏻' }, type: 1 }]
await naze.sendButtonText(m.chat, buttons, `𝗽𝗮𝗽𝗲𝗽𝗮𝗽𝗲, 𝗴𝗮𝗸 𝗽𝘂𝗻𝘆𝗮 𝗮𝗴𝗮𝗺𝗮 𝗸𝗮𝗵 𝗸𝗮𝗸 ?\n \n𝘈𝘺𝘰 𝘴𝘢𝘭𝘢𝘮 𝘥𝘶𝘭𝘶 𝘬𝘢𝘬..`, naze.user.name, m)}

if (budy.includes(`Assalam`)) { 
let buttons = [{ buttonId: 'thanks', buttonText: { displayText: '\nMakasihh sudah Jawab salamku, Semoga dapatkan pahala Amiin🤲🏻' }, type: 1 }]
await naze.sendButtonText(m.chat, buttons, `\n𝙒𝙖𝙖𝙡𝙖𝙞𝙠𝙪𝙢𝙨𝙖𝙡𝙖𝙢 𝙠𝙖𝙠 ${pushname}`, naze.user.name, m)}
if (budy.includes(`Asalam`)) { 
let buttons = [{ buttonId: 'thanks', buttonText: { displayText: '\nMakasihh sudah Jawab salamku, Semoga dapatkan pahala Amiin🤲🏻' }, type: 1 }]
await naze.sendButtonText(m.chat, buttons, `\n𝙒𝙖𝙖𝙡𝙖𝙞𝙠𝙪𝙢𝙨𝙖𝙡𝙖𝙢 𝙠𝙖𝙠 ${pushname}`, naze.user.name, m)}
if (budy.includes(`assalam`)) { 
let buttons = [{ buttonId: 'thanks', buttonText: { displayText: '\nMakasihh sudah Jawab salamku, Semoga dapatkan pahala Amiin🤲🏻' }, type: 1 }]
await naze.sendButtonText(m.chat, buttons, `\n𝙒𝙖𝙖𝙡𝙖𝙞𝙠𝙪𝙢𝙨𝙖𝙡𝙖𝙢 𝙠𝙖𝙠 ${pushname}`, naze.user.name, m)}
if (budy.includes(`asalam`)) { 
let buttons = [{ buttonId: 'thanks', buttonText: { displayText: '\nMakasihh sudah Jawab salamku, Semoga dapatkan pahala Amiin🤲🏻' }, type: 1 }]
await naze.sendButtonText(m.chat, buttons, `\n𝙒𝙖𝙖𝙡𝙖𝙞𝙠𝙪𝙢𝙨𝙖𝙡𝙖𝙢 𝙠𝙖𝙠 ${pushname}`, naze.user.name, m)}

if (budy.includes(`@6285752235008`)) {
let buttons = [{ buttonId: 'bilek3', buttonText: { displayText: '\nGw kangen dia anj😭' }, type: 1 }]
await naze.sendButtonText(m.chat, buttons, `𝙃𝙚𝙮 ${pushname}, 𝙣𝙜𝙖𝙥𝙖𝙞𝙣 𝙩𝙖𝙜 𝙩𝙖𝙜 𝘿𝙚𝙫𝙚𝙡𝙤𝙥𝙚𝙧𝙠𝙪 ?`, naze.user.name, m)}
if (budy.includes(`@628988392437`)) {
let buttons = [{ buttonId: 'bilek1', buttonText: { displayText: '\nNgewe yuk🥰' }, type: 1 }]
await naze.sendButtonText(m.chat, buttons, `𝙃𝙚𝙮 ${pushname}, 𝙣𝙜𝙖𝙥𝙖𝙨𝙞𝙝 𝙩𝙖𝙜 𝙩𝙖𝙜 𝙜𝙬 ?`, naze.user.name, m)}
                
if (budy == 'tes') {
let buttons = [{ buttonId: 'menu', buttonText: { displayText: 'Menu' }, type: 1 }]
await naze.sendButtonText(m.chat, buttons, `𝙊𝙠, 𝙗𝙤𝙩 𝙣𝙮𝙖 𝙖𝙠𝙩𝙞𝙛 !!`, `Runtime: ${runtime(process.uptime())}`, m)}
if (budy == 'Tes') {
let buttons = [{ buttonId: 'menu', buttonText: { displayText: 'Menu' }, type: 1 }]
await naze.sendButtonText(m.chat, buttons, `𝙊𝙠, 𝙗𝙤𝙩 𝙣𝙮𝙖 𝙖𝙠𝙩𝙞𝙛 !!`, `Runtime: ${runtime(process.uptime())}`, m)}
if (budy == 'test') {
let buttons = [{ buttonId: 'menu', buttonText: { displayText: 'Menu' }, type: 1 }]
await naze.sendButtonText(m.chat, buttons, `𝙊𝙠, 𝙗𝙤𝙩 𝙣𝙮𝙖 𝙖𝙠𝙩𝙞𝙛 !!`, `Runtime: ${runtime(process.uptime())}`, m)}
if (budy == 'Test') {
let buttons = [{ buttonId: 'menu', buttonText: { displayText: 'Menu' }, type: 1 }]
await naze.sendButtonText(m.chat, buttons, `𝙊𝙠, 𝙗𝙤𝙩 𝙣𝙮𝙖 𝙖𝙠𝙩𝙞𝙛 !!`, `Runtime: ${runtime(process.uptime())}`, m)}
if (budy == 'bot') { 
let buttons = [{ buttonId: 'bilek4', buttonText: { displayText: '\nAda hati buat kamu😘😘' }, type: 1 }]
await naze.sendButtonText(m.chat, buttons, `𝙔𝙖 𝙠𝙖𝙠 ${pushname}, 𝙖𝙙𝙖 𝙖𝙥𝙖 𝙮𝙖 ?`, `Runtime: ${runtime(process.uptime())}`, m)}
if (budy == 'Bot') { 
let buttons = [{ buttonId: 'bilek4', buttonText: { displayText: '\nAda hati buat kamu😘😘' }, type: 1 }]
await naze.sendButtonText(m.chat, buttons, `𝙔𝙖 𝙠𝙖𝙠 ${pushname}, 𝙖𝙙𝙖 𝙖𝙥𝙖 𝙮𝙖 ?`, `Runtime: ${runtime(process.uptime())}`, m)}
if (budy.includes(`Makasih`)) {
let buttons = [{ buttonId: 'owner', buttonText: { displayText: 'Owner Bot' }, type: 1 }]
await naze.sendButtonText(m.chat, buttons, `𝙄𝙮𝙖 𝙨𝙖𝙢𝙖-𝙨𝙖𝙢𝙖 𝙠𝙖𝙠 ${pushname}, 𝙎𝙚𝙢𝙤𝙜𝙖 𝙝𝙖𝙧𝙞𝙢𝙪 𝙢𝙚𝙣𝙮𝙚𝙣𝙖𝙣𝙜𝙠𝙖𝙣😊`, naze.user.name, m)}
if (budy.includes(`makasih`)) {
let buttons = [{ buttonId: 'owner', buttonText: { displayText: 'Owner Bot' }, type: 1 }]
await naze.sendButtonText(m.chat, buttons, `𝙄𝙮𝙖 𝙨𝙖𝙢𝙖-𝙨𝙖𝙢𝙖 𝙠𝙖𝙠 ${pushname}, 𝙎𝙚𝙢𝙤𝙜𝙖 𝙝𝙖𝙧𝙞𝙢𝙪 𝙢𝙚𝙣𝙮𝙚𝙣𝙖𝙣𝙜𝙠𝙖𝙣😊`, naze.user.name, m)}
if (budy.includes(`Mksh`)) {
let buttons = [{ buttonId: 'owner', buttonText: { displayText: 'Owner Bot' }, type: 1 }]
await naze.sendButtonText(m.chat, buttons, `𝙄𝙮𝙖 𝙨𝙖𝙢𝙖-𝙨𝙖𝙢𝙖 𝙠𝙖𝙠 ${pushname}, 𝙎𝙚𝙢𝙤𝙜𝙖 𝙝𝙖𝙧𝙞𝙢𝙪 𝙢𝙚𝙣𝙮𝙚𝙣𝙖𝙣𝙜𝙠𝙖𝙣😊`, naze.user.name, m)}
if (budy.includes(`mksh`)) {
let buttons = [{ buttonId: 'owner', buttonText: { displayText: 'Owner Bot' }, type: 1 }]
await naze.sendButtonText(m.chat, buttons, `𝙄𝙮𝙖 𝙨𝙖𝙢𝙖-𝙨𝙖𝙢𝙖 𝙠𝙖𝙠 ${pushname}, 𝙎𝙚𝙢𝙤𝙜𝙖 𝙝𝙖𝙧𝙞𝙢𝙪 𝙢𝙚𝙣𝙮𝙚𝙣𝙖𝙣𝙜𝙠𝙖𝙣😊`, naze.user.name, m)}
if (budy == 'Thanks') {
let buttons = [{ buttonId: 'owner', buttonText: { displayText: 'Owner Bot' }, type: 1 }]
await naze.sendButtonText(m.chat, buttons, `𝙄𝙮𝙖 𝙨𝙖𝙢𝙖-𝙨𝙖𝙢𝙖 𝙠𝙖𝙠 ${pushname}, 𝙎𝙚𝙢𝙤𝙜𝙖 𝙝𝙖𝙧𝙞𝙢𝙪 𝙢𝙚𝙣𝙮𝙚𝙣𝙖𝙣𝙜𝙠𝙖𝙣😊`, naze.user.name, m)}
if (budy == 'thanks') {
let buttons = [{ buttonId: 'owner', buttonText: { displayText: 'Owner Bot' }, type: 1 }]
await naze.sendButtonText(m.chat, buttons, `𝙄𝙮𝙖 𝙨𝙖𝙢𝙖-𝙨𝙖𝙢𝙖 𝙠𝙖𝙠 ${pushname}, 𝙎𝙚𝙢𝙤𝙜𝙖 𝙝𝙖𝙧𝙞𝙢𝙪 𝙢𝙚𝙣𝙮𝙚𝙣𝙖𝙣𝙜𝙠𝙖𝙣😊`, naze.user.name, m)}
if (budy == 'Tq') {
let buttons = [{ buttonId: 'owner', buttonText: { displayText: 'Owner Bot' }, type: 1 }]
await naze.sendButtonText(m.chat, buttons, `𝙄𝙮𝙖 𝙨𝙖𝙢𝙖-𝙨𝙖𝙢𝙖 𝙠𝙖𝙠 ${pushname}, 𝙎𝙚𝙢𝙤𝙜𝙖 𝙝𝙖𝙧𝙞𝙢𝙪 𝙢𝙚𝙣𝙮𝙚𝙣𝙖𝙣𝙜𝙠𝙖𝙣😊`, naze.user.name, m)}
if (budy == 'tq') {
let buttons = [{ buttonId: 'owner', buttonText: { displayText: 'Owner Bot' }, type: 1 }]
await naze.sendButtonText(m.chat, buttons, `𝙄𝙮𝙖 𝙨𝙖𝙢𝙖-𝙨𝙖𝙢𝙖 𝙠𝙖𝙠 ${pushname}, 𝙎𝙚𝙢𝙤𝙜𝙖 𝙝𝙖𝙧𝙞𝙢𝙪 𝙢𝙚𝙣𝙮𝙚𝙣𝙖𝙣𝙜𝙠𝙖𝙣😊`, naze.user.name, m)}

if (budy.includes(`Cantik`)) {
const slkn = fs.readFileSync('./audio/cantik.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
if (budy.includes(`cantik`)) {
const slkn = fs.readFileSync('./audio/cantik.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
if (budy == 'Anjing') {
const slkn = fs.readFileSync('./audio/ajg.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
if (budy == 'Ajg') {
const slkn = fs.readFileSync('./audio/ajg.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
if (budy == 'anjing') {
const slkn = fs.readFileSync('./audio/ajg.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
if (budy == 'ajg') {
const slkn = fs.readFileSync('./audio/ajg.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
if (budy == 'Anj') {
const slkn = fs.readFileSync('./audio/ajg.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
if (budy == 'anj') {
const slkn = fs.readFileSync('./audio/ajg.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
if (budy == 'Tolol') {
const slkn = fs.readFileSync('./audio/ajg.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
if (budy == 'tolol') {
const slkn = fs.readFileSync('./audio/ajg.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
if (budy == 'Bngst') {
const slkn = fs.readFileSync('./audio/ajg.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
if (budy == 'bngst') {
const slkn = fs.readFileSync('./audio/ajg.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
if (budy == 'Bangsat') {
const slkn = fs.readFileSync('./audio/ajg.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
if (budy == 'bangsat') {
const slkn = fs.readFileSync('./audio/ajg.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
if (budy == 'Kontol') {
const slkn = fs.readFileSync('./audio/ajg.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
if (budy == 'kontol') {
const slkn = fs.readFileSync('./audio/ajg.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
if (budy == 'Kntl') {
const slkn = fs.readFileSync('./audio/ajg.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
if (budy == 'kntl') {
const slkn = fs.readFileSync('./audio/ajg.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
if (budy == 'Ah') {
const slkn = fs.readFileSync('./audio/yamete.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
if (budy == 'ah') {
const slkn = fs.readFileSync('./audio/yamete.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
if (budy.includes(`Yamete`)) {
const slkn = fs.readFileSync('./audio/yamete.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
if (budy.includes(`yamete`)) {
const slkn = fs.readFileSync('./audio/yamete.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
if (budy.includes(`Yamate`)) {
const slkn = fs.readFileSync('./audio/yamete.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
if (budy.includes(`yamate`)) {
const slkn = fs.readFileSync('./audio/yamete.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
                
//Premium Exp
prem.expiredCheck(naze, m, premium);                
//sticker url
               const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                request.head(uri, function (err, res, body) {
                request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
                };
                download(url, './database/stick' + names + '.png', async function () {
                console.log('selesai');
                 let filess = './database/stick' + names + '.png'
                 let asw = './database/stick' + names + '.webp'
                exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                 let media = fs.readFileSync(asw)
                naze.sendMessage(to, { sticker: media}, {quoted: m})
                 fs.unlinkSync(filess)
                 fs.unlinkSync(asw)
                  });
                  });
                  }           
//Resize
            const reSize = async(buffer, ukur1, ukur2) => {
             return new Promise(async(resolve, reject) => {
             let jimp = require('jimp')
             var baper = await jimp.read(buffer);
             var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
             resolve(ab)
             })}           
//Fake
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: await reSize(thumb, 100, 100), surface: 200, message: `${ytname}`, orderTitle: 'Zenz', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: `${ytname}`,jpegThumbnail: await reSize(thumb, 100, 100)}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const ftextt = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})}, message: { "extendedTextMessage": {"text":`${ytname}`, "title": `${botname}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
        const ftoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast" } : {})}, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": await reSize(thumb, 100, 100)},"title": `${ytname}`, "description": `${botname}`, "currencyCode": "IDR", "priceAmount1000": "1000000000000000000", "retailerId": `${ytname}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}} 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":`${ytname}`, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': `${ytname}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6285752235008-1616169743@g.us","inviteCode": "m","groupName": `${ytname}`, "caption": `${ytname}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":`${ytname}`, "h": `Hmm`,'seconds': '359996400', 'caption': `${ytname}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${ytname}`,jpegThumbnail: await reSize(thumb, 100, 100)}}}
		const floc2 = {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "title": `${ytname}`,"h": `Hmm`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `${ytname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ytname,;;;\nFN:ytname\nitem1.TEL;waid=6285752235008:6285752235008\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': await reSize(thumb, 100, 100), thumbnail: await reSize(thumb, 100, 100),sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": `${ytname}`,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": await reSize(thumb, 100, 100),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
		
//reset limit every 12 hours
            let cron = require('node-cron')
            cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
            }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
            })

// total hit
          global.hit = {}
           if (isCmd) {
          data = await fetchJson('https://api.countapi.xyz/hit/naze-md/visits')
           jumlahcmd = `${data.value}`
          dataa = await fetchJson(`https://api.countapi.xyz/hit/naze-md${moment.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`)
           jumlahharian = `${dataa.value}`
           }

// auto set bio
        if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await naze.setStatus(`• ${naze.user.name} | Telah Online Selama : ${runtime(process.uptime())}`)
		setting.status = new Date() * 1
	    }}
	
// Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!m.isGroup) return m.reply(`JIKA INGIN SEWA BOT KLIK LINK DIBAWAH INI:\n• https://wa.me/p/8280632638628698/62895323263224`)
        if (!isBotAdmins) return m.reply(`⟬ 𝗟𝗜𝗡𝗞 𝗚𝗥𝗢𝗨𝗣 𝗗𝗘𝗧𝗘𝗖𝗧𝗘𝗗 ⟭\n\n 𝘛𝘩𝘪𝘴 𝘍𝘦𝘢𝘵𝘶𝘳𝘦 𝘊𝘢𝘯 𝘖𝘯𝘭𝘺 𝘉𝘦 𝘜𝘴𝘦𝘥 𝘈𝘧𝘵𝘦𝘳 𝘛𝘩𝘪𝘴 𝘕𝘶𝘮𝘣𝘦𝘳 𝘉𝘦𝘤𝘰𝘮𝘦𝘴 𝘈𝘥𝘮𝘪𝘯!`)
        m.reply(`⟬ 𝗟𝗜𝗡𝗞 𝗚𝗥𝗢𝗨𝗣 𝗗𝗘𝗧𝗘𝗖𝗧𝗘𝗗 ⟭\n 𝘈𝘶𝘵𝘰 𝘬𝘪𝘤𝘬 !!`)
        let gclink = (`https://chat.whatsapp.com/`+await naze.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`𝘒𝘢𝘳𝘦𝘯𝘢 𝘬𝘢𝘮𝘶 𝘯𝘨𝘪𝘳𝘪𝘮 𝘭𝘪𝘯𝘬 𝘨𝘳𝘶𝘱 𝘪𝘯𝘪, 𝘫𝘢𝘥𝘪 𝘬𝘢𝘮𝘶 𝘢𝘮𝘢𝘯 !`)
        if (isCreator) return m.reply(`𝘔𝘢𝘢𝘧 𝘛𝘪𝘥𝘢𝘬 𝘉𝘪𝘴𝘢 𝘒𝘪𝘤𝘬, 𝘒𝘢𝘳𝘦𝘯𝘢 𝘒𝘢𝘮𝘶 𝘋𝘦𝘷𝘦𝘭𝘰𝘱𝘦𝘳 𝘒𝘶 !`)
        if (isAdmins) return m.reply(`𝘔𝘢𝘢𝘧 𝘵𝘪𝘥𝘢𝘬 𝘣𝘪𝘴𝘢 𝘬𝘪𝘤𝘬, 𝘒𝘢𝘳𝘦𝘯𝘢 𝘬𝘢𝘮𝘶 𝘢𝘥𝘮𝘪𝘯 𝘨𝘳𝘰𝘶𝘱 𝘪𝘯𝘪 !`)
        naze.sendMessage(m.chat, { delete: m.key })
        await sleep(3000)
        naze.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }}
// Naze Dev
      const deploy = (teks) => { naze.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})}
        
// Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

// Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
        userJid: naze.user.id,
        quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, naze.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
        ...chatUpdate,
        messages: [proto.WebMessageInfo.fromObject(messages)],
        type: 'append'
        }
        naze.ev.emit('messages.upsert', msg)
        }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia kak !
Dia sedang coli ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Kamu berhenti coli${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }    
        switch(command) {
                
                
// GROUP MENU:
case 'k': case 'kick': {
		        if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator) throw mess.admin
		        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		        await naze.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply('_Succeeded in removing participants !_')).catch((err) => m.reply(jsonformat(err)))
	            }
	            break
	
case 'add': {
		        if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator) throw mess.admin
		        let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		        await naze.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply('_Succeeded added participants !_')).catch((err) => m.reply(jsonformat(err)))
	            }
	            break
	
case 'pm': case 'promote': {
		        if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator) throw mess.admin
		        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		        await naze.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply('_Sukses Promote !_')).catch((err) => m.reply(jsonformat(err)))
	            }
	            break
	
case 'dm': case 'demote': {
		        if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator) throw mess.admin
		        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		        await naze.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply('_Sukses Demote !_')).catch((err) => m.reply(jsonformat(err)))
	            }
	            break
     
case 'setppgroup': case 'setppgrup': case 'setppgc': {
		        if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await naze.downloadAndSaveMediaMessage(quoted)
                await naze.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
                   
case 'setname': case 'setsubject': {
		        if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator) throw mess.admin
                if (!text) throw 'Text ?'
               await naze.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
               }
               break
          
case 'setdesc': case 'setdesk': {
		        if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator) throw mess.admin
                if (!text) throw 'Text ?'
                await naze.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
                }
                break
            
case 'tagall': {
		        if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator) throw mess.admin
                let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                naze.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                        
case 'hide': case 'hidetag': {
		        if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator) throw mess.admin
                 naze.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
                 }
                 break
                 
case 'buka': case 'open': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator) throw mess.admin
                await naze.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`_Successfully Opened Group !_`)).catch((err) => m.reply(jsonformat(err)))
                }
                break
                        
case 'tutup': case 'close': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator) throw mess.admin
                await naze.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`_Successfully Closed The Group !_`)).catch((err) => m.reply(jsonformat(err)))
                }
                break
                
case 'closetime': 
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator) throw mess.admin
                if (args[1]=="detik") {var timer = args[0]*`1000`
                } else if (args[1]=="menit") {var timer = args[0]*`60000`
                } else if (args[1]=="jam") {var timer = args[0]*`3600000`
                } else if (args[1]=="hari") {var timer = args[0]*`86400000`
                } else {return m.reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
                m.reply(`⏱️ 𝙏𝙞𝙢𝙚𝙧\n Close group ${q}, dimulai dari sekarang !!`)
                setTimeout( () => {
                const close = ` ⏱️ 𝙏𝙞𝙢𝙚𝙧\n\n*Tepat waktu*, grup ditutup oleh admin !!\nSekarang hanya admin yang dapat mengirim pesan`
                naze.groupSettingUpdate(m.chat, 'announcement')
                m.reply(close)
                }, timer)
                break

case 'opentime':        
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator) throw mess.admin
                if (args[1]=="detik") {var timer = args[0]*`1000`
                } else if (args[1]=="menit") {var timer = args[0]*`60000`
                } else if (args[1]=="jam") {var timer = args[0]*`3600000`
                } else if (args[1]=="hari") {var timer = args[0]*`86400000`
                } else {return m.reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
                m.reply(`⏱️ 𝙏𝙞𝙢𝙚𝙧\nOpen group ${q}, dimulai dari sekarang !!`)
                setTimeout( () => {
                const open = ` ⏱️ 𝙏𝙞𝙢𝙚𝙧\n\n*Tepat waktu* grup dibuka oleh admin !!\nSekarang member dapat mengirim pesan`
                naze.groupSettingUpdate(m.chat, 'not_announcement')
                m.reply(open)
                }, timer)
                break
            
case 'antilink': {
                if (!isAdmins && !isCreator) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`*Sudah Aktif Sebelumnya*`)
                db.data.chats[m.chat].antilink = true
                m.reply(`*「 ANTI LINK ON 」*\n\nGroup ini sudah berhasil di pasang anti link❗\nJika kamu melanggar maka akan saya tendang`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`*Sudah Tidak Aktif Sebelumnya*`)
                db.data.chats[m.chat].antilink = false
                m.reply(`_Sukses menonaktifkan fitur antilink di grup ini !_`)
                } else {
                let buttons = [
                { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                ]
                await naze.sendButtonText(m.chat, buttons, `Mode Antilink`, naze.user.name, m)
                }}
                break
    
case 'revoke':
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                await naze.groupRevokeInvite(m.chat)
                .then(res => {
                m.reply(`Sukses Menyetel Ulang, Tautan Undangan Grup ${groupMetadata.subject}`)
                }).catch((err) => m.reply(jsonformat(err)))
                break 

case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator) throw mess.admin
                if (db.data.chats[m.chat].mute) return m.reply(`_Sudah Aktif Sebelumnya !_`)
                db.data.chats[m.chat].mute = true
                m.reply(`_${botname} telah di mute di group ini !_`)
                }
                break
             
case 'unmute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator) throw mess.admin
                if (!db.data.chats[m.chat].mute) return m.reply(`_Sudah Tidak Aktif Sebelumnya !_`)
                db.data.chats[m.chat].mute = false
                m.reply(`_${botname} telah di unmute di group ini !_`)
                }
                break
            
case 'link': case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await naze.groupInviteCode(m.chat)
                naze.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n👾Link Group : ${groupMetadata.subject}`, m, { detectLink: true })
                }
                break
           
case 'listonline': case 'liston': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins && !isCreator) throw mess.admin
                let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                let online = [...Object.keys(store.presences[id]), botNumber]
                naze.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
                }
                break 
            
case 'tagme': {
            if (!m.isGroup) throw mess.group
            let me = m.sender
            let jawab = `*@${me.split('@')[0]}*`
            let ments = [me]
            let buttons = [{ buttonId: 'Thanks', buttonText: { displayText: '\nThanks' }, type: 1 }]
            naze.sendMessage(m.chat, {react: {text: kloadq,key: m.key}})
            await naze.sendButtonText(m.chat, buttons, jawab, nyoutube, m, {mentions: ments, quoted: m})
            }
            break
               
case 'totag': {
               if (!m.isGroup) throw mess.group
               if (!isBotAdmins) throw mess.botAdmin
               if (!isAdmins && !isCreator) throw mess.admin
               if (!m.quoted) throw `Reply pesan dengan caption ${prefix + command}`
               naze.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break

case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator) throw mess.admin
                if (args[0] === "on") {
                await naze.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply('_Sukses mengaktifkan ephemeral 7 days di grup ini !_')).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === "off") {
                await naze.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply('_Sukses menonaktifkan ephemeral di grup ini !_')).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                { buttonId: 'ephemeral on', buttonText: { displayText: 'On' }, type: 1 },
                { buttonId: 'ephemeral off', buttonText: { displayText: 'Off' }, type: 1 }
                ]
                await naze.sendButtonText(m.chat, buttons, `Mode Ephemeral`, naze.user.name, m)
                }}
                break
            
case 'afk': {
                 if (!m.isGroup) throw mess.group
                 let user = global.db.data.users[m.sender]
                 user.afkTime = + new Date
                 user.afkReason = text
                 m.reply(`${m.pushName} Sedang Coli ${text ? 'Dengan Alasan ' + text : ''}\n\nJangan di ganggu ya`)
                 }
                 break
            
case 'poll': {
if (!isCreator) return mess.owner
if (!text) throw `Example : ${prefix + command} Developer Ganteng|Iya|Tidak`
let poll1 = `${text.split("|")[1]}`
let poll2 = `${text.split("|")[2]}`
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": `${text.split("|")[0]}`,
"options": [
	{
"optionName": poll1
	},
	{
"optionName": poll2
	}
],
"selectableOptionsCount": 2
	}
}), { userJid: m.chat})
naze.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id})
}
break
            
//Pembatas FUN===============================================
case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await naze.sendButtonText(m.chat, buttons, jawab, naze.user.name, m, {mentions: ments})
            }
            break
            
case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa Donasi🗿

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jadian' }, type: 1 }
                    ]
                    await naze.sendButtonText(m.chat, buttons, jawab, nyoutube, m, {mentions: menst})
            }
            break
            
case 'bisakah': {
            	if (!text) throw `Example : ${prefix + command} saya menang?`
            	let bisa = ['Bisa','Coba Saja','Pasti Bisa','Mungkin Saja','Tidak Bisa','Tidak Mungkin','Coba Ulangi','Ngimpi kah?','yakin bisa?']
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Bisakah ${text}*\nJawab : ${keh}`
                naze.sendMessage(m.chat, { text: jawab }, {quoted: m})
            }
            break
            
case 'apakah': {
            	if (!text) throw `Example : ${prefix + command} saya bisa menang?`
            	let apa = ['Iya','Tidak','Bisa Jadi','Coba Ulangi','Mungkin Saja','Coba Tanyakan Ayam']
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Apakah ${text}*\nJawab : ${kah}`
                naze.sendMessage(m.chat, { text: jawab }, {quoted: m})
            }
            break
            
case 'kapan': case 'kapankah': {
            	if (!text) throw `Example : ${prefix + command} saya menang?`
            	let kapan = ['Besok','Lusa','Nanti','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Bulan Depan','Nanti','Tidak Akan Pernah']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*${command} ${text}*\nJawab : ${koh}`
                naze.sendMessage(m.chat, { text: jawab }, {quoted: m})
            }
            break
			
case 'fitnah': {
            if (!m.isGroup) throw mess.group
if (args.length < 1) return reply(`Contoh :\n${prefix}fitnah [nomor|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah 0|hai|hai juga Zenz`)
var gh = body.slice(10)
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
var parti = gh.split("|")[0];
var targetq = gh.split("|")[1];
var bot = gh.split("|")[2];
var ftelo = {key: {fromMe: false, participant: `${mentioned}`, ...(m.chat ? { remoteJid: m.chat } : {})}, message: { conversation: `${targetq}` }}
naze.sendMessage(m.chat, {text: bot}, {quoted: ftelo})
}
break
           
//PEMBATAS ADMIN & OWNER=======================================
            
case 'req': case 'request': {
            	if (!text) throw `Contoh : ${prefix + command} Fitur Min`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Pesan Dari : @${me.split('@')[0]} \nUntuk : @${ownernya.split('@')[0]}\n\n${command} ${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '🙏THANKS' }, type: 1 }]
               await naze.sendButtonText(ownernya, buttons, pjtxt, nyoutube, m, {mentions: ments, quoted: fdoc})
               let akhji = `*Request Telah Terkirim*\n*Ke Owner @${ownernya.split('@')[0]}*\n_Terima Kasih🙏_`
               await naze.sendButtonText(m.chat, buttons, akhji, nyoutube, m, {mentions: ments, quoted: fkontak})
               }
               break
            
case 'report': case 'lapor': {
           	if (!text) throw `Contoh : ${prefix + command} Ada Fitur Yang error`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Pesan Dari : @${me.split('@')[0]} \nUntuk : @${ownernya.split('@')[0]}\n\n${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '🙏THANKS LAPORANNYA' }, type: 1 }]
               await naze.sendButtonText(ownernya, buttons, pjtxt, nyoutube, m, {mentions: ments})
               let akhji = `Laporan Telah Terkirim\nKe Owner @${ownernya.split('@')[0]}\n*Terima Kasih Laporannya🙏*\n_Nomermu Akan Terblokir_\n_Jika Laporan Hanya Di Buat Buat_`
               await naze.sendButtonText(m.chat, buttons, akhji, nyoutube, m, {mentions: ments})
               }
               break
            
case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
	    
case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`}
                naze.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })}
               break
        
case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Title* : ${g.title}\n`
                teks += `⭔ *Description* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`} 
                m.reply(teks)
                })}
                break

case 'play': case 'ytplay': {
	            if (m.isGroup) throw mess.private
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [{buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1}, {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}]
                let buttonMessage = {
                image: { url: anu.thumbnail },
                caption: ` *YOUTUBE PLAY*\n\n⭔ Title : ${anu.title}\n⭔ Duration : ${anu.timestamp}\n\n⭔ Url : ${anu.url}`,
                footer: naze.user.name,
                buttons: buttons,
                headerType: 4
                }
                naze.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break
	
case 'ytmp3': case 'ytaudio': {
	            if (m.isGroup) throw mess.private
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                naze.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                naze.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
                }
                break
            
case 'ytmp4': case 'ytvideo': {
	            if (m.isGroup) throw mess.private
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                naze.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
                }
                break
            
case 'pinterest': case 'pin': {
                m.reply(mess.wait)
		        let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                naze.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
                }
                break
	    
case 'ppcouple': case 'ppcp': case 'couple': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                naze.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                naze.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
                }
	            break
            
case 'tinyurl': case 'shortlink': {
            	if (!text) throw 'Masukkan Query Link!'
                let anu = await axios.get(`https://tinyurl.com/api-create.php?url=${text}`)
                naze.sendMessage(m.chat,{ text: anu.data + `\nNih Bro`}, { quoted: fdoc })
                }
                break
            
case 'linkpoi': {
            	if (!text) throw 'Masukkan Query Link!'
                let poi = await fetchJson(`https://linkpoi.ga/api.php?url=${text}`)
                naze.sendMessage(m.chat, { text: poi.shorturl + `\nNih Bro`}, { quoted: m })
                }
                break
             
case 'tt': case 'tiktok': case 'tiktoknowm': {
	            if (m.isGroup) throw mess.private
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://hadi-api.cf/api/tiktok?url=${text}`)
                let buttons = [{buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}]
                let buttonMessage = {
                video: { url: anu.result.video.nowm },
                caption: `Download From ${text}`,
                footer: nyoutube,
                buttons: buttons,
                headerType: 5
                }
                naze.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break
            
case 'tiktokmp3': case 'tiktokaudio': {
	            if (m.isGroup) throw mess.private
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://hadi-api.cf/api/tiktok?url=${text}`)
                let buttons = [{buttonId: `allmenu`, buttonText: {displayText: '📖List Menu'}, type: 1}]
                let buttonMessage = {
                text: `Download From ${text}`,
                footer: nyoutube,
                buttons: buttons,
                headerType: 2
                 }
                let msg = await naze.sendMessage(m.chat, buttonMessage, { quoted: m })
                naze.sendMessage(m.chat, { audio: { url: anu.result.audio_only.audio1 }, mimetype: 'audio/mpeg'}, { quoted: msg })
                }
                break
	        
case 'instagram': case 'ig': case 'igdl': {
	            if (m.isGroup) throw mess.private
                if (!text) throw 'No Query Url!'
                m.reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                for (let media of anu.data) naze.sendFileUrl(m.chat, media, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                naze.sendFileUrl(m.chat, anu.media[0].url, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }}
                break
	        
case 'fbdl': case 'fb': case 'facebook': {
	            if (m.isGroup) throw mess.private
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                naze.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⭔ Title : ${anu.result.title}`}, { quoted: m })
                }
                break
	        
case 'image': {
               if (!text) throw 'Masukkan Query Link!'
               m.reply(mess.wait)
		       let { pinterest } = require('./lib/scraper')
               anu = await pinterest(text)
               result = anu[Math.floor(Math.random() * anu.length)]
               naze.sendMessage(m.chat, { image: { url: result }, fileLength: jumlah, caption: `Media Url :\n`+result}, { quoted: fkontak })
               }
               break
               
               
//PEMBATAS CONVERT=======================================
case 'stiker': case 'sticker': case 's': case 'stickergif': case 'sgif': {
                if (!quoted) throw `*Balas Video/Image Dengan Caption* ${prefix + command}`
                m.reply(mess.wait)
                if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await naze.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('*Maksimal 10 detik!*')
                let media = await quoted.download()
                let encmedia = await naze.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
                } else {
                throw `*Kirim Gambar/Video Dengan Caption* ${prefix + command}\nDurasi *Video 1-9 Detik*`
                }
                }
                break
            
case 'stikerwm': case 'stickerwm': case 'swm': {
                let [teks1, teks2] = text.split`|`
                if (!teks1) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
                if (!teks2) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
            	m.reply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await naze.downloadMediaMessage(qmsg)
                    let encmedia = await naze.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await naze.downloadMediaMessage(qmsg)
                    let encmedia = await naze.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
         
case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Contoh : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Contoh : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
        let encmedia = await naze.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
        await fs.unlinkSync(encmedia)
		}}
	    break
	          
case 'emoji': {
	        if (!text) throw `Contoh : ${prefix + command} 😅`
		    let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
            for (let res of anu.results) {
		    let encmedia = await naze.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		    }}
	        break
 
case 'attp': case 'ttp': {
           if (!text) throw `Contoh : ${prefix + command} text`
           await naze.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'naze', 'dev', m, {asSticker: true})
           }
           break
         
case 'tts': {
         	if (!text) throw `Contoh : ${prefix + command} text`
             let tts = await fetchJson(`https://api.akuari.my.id/texttovoice/texttosound_id?query=${text}`)
             naze.sendMessage(m.chat, { audio: { url: tts.result }, mimetype: 'audio/mpeg', fileName: `${text}.mp3` }, { quoted: fvn })
         	}
             break
	       
case 'smeme': {
		    try {
	        let respond = `*Kirim/reply image/sticker !!*\n\nContoh: ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
            let { TelegraPh } = require('./lib/uploader')
            let mee = await naze.downloadAndSaveMediaMessage(qmsg)
            let mem = await TelegraPh(mee)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
	        let awikwok = await naze.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.author })
	        await fs.unlinkSync(awikwok)
	        } catch (e) {
		    m.reply(`Error\nHarus Pakai Gambar!`)
		    }}
	        break
         
case 'geturl': {
         	if (!text) throw `Contoh : ${prefix + command} url/link`
             m.reply(mess.wait)
             let igmk = await getBuffer(`${text}`)
             naze.sendMessage(m.chat, { image: igmk}, { quoted: ftroli }).catch((err) => m.reply(mess.error))
         	}
             break
            
case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await naze.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                fs.unlinkSync(media)
                if (err) throw err
                let buffer = fs.readFileSync(ran)
                naze.sendMessage(m.chat, { image: buffer }, { quoted: m })
                fs.unlinkSync(ran)
                })
                 }
                break
	        
case 'tovid': case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await naze.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await naze.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
                }
                break
            
case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            naze.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${naze.user.name}.mp3`}, { quoted : m })
            }
            break
            
case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            naze.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            
case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await naze.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await naze.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
                }
                break
	        
case 'tourl': {
                m.reply(mess.wait)
		        let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await naze.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                let anu = await TelegraPh(media)
                m.reply(util.format(anu))
                 } else if (!/image/.test(mime)) {
                let anu = await UploadFileUgu(media)
                m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
                }
                break


//PEMBATAS DATABASE=======================================
case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            
case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
                }
                break
            
case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                naze.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            
case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
                }
                break
            
case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
                m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            
case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                naze.copyNForward(m.chat, msgs[text.toLowerCase()], true)
                }
                break
            
case 'listmsg': {
            let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		    let teks = '「 LIST DATABASE 」\n\n'
		    for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
            }
	        break
            
case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		    delete msgs[text.toLowerCase()]
		    m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	        break

case 'delete': case 'del': case 'd': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins && !isCreator) throw mess.admin
                naze.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                naze.sendMessage(m.chat, { delete: { remoteJid: m.chat, id: m.quoted.id, participant: m.quoted.sender } })
                }
                break
                
                
 //PEMBATAS VOICE MENU=======================================
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await naze.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                naze.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Reply audio/vn yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break


//PEMBATAS OWNER=======================================
case 'join': {
               if (!isCreator) throw mess.owner
               if (!text) throw 'Masukkan Link Group!'
               if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
               m.reply(mess.wait)
               let result = args[0].split('https://chat.whatsapp.com/')[1]
               await naze.groupAcceptInvite(result).then((res) => m.reply('_Success.. already joined the group !_')).catch((err) => m.reply(jsonformat(err)))
               }
               break
   
case 'leave': {
               if (!isCreator) throw mess.owner
               await naze.groupLeave(m.chat).then((res) => m.reply('Sayonara..👋🏻')).catch((err) => m.reply(jsonformat(err)))
               }
               break
            
case 'exif': case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
               global.packname = text.split("|")[0]
               global.author = text.split("|")[1]
               m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
                }
                break
        
case 'blok': case 'block': {
		        if (!isCreator) throw mess.owner
		        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		        await naze.updateBlockStatus(users, 'block').then((res) => m.reply('_Successfully blocked !_')).catch((err) => m.reply(jsonformat(err)))
	            }
	            break
        
case 'unblok': case 'unblock': {
		        if (!isCreator) throw mess.owner
		        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		        await naze.updateBlockStatus(users, 'unblock').then((res) => m.reply('_Successfully unblocked !_')).catch((err) => m.reply(jsonformat(err)))
	            }
	            break
          
case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await naze.downloadAndSaveMediaMessage(quoted)
                await naze.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
   
case 'listpc': {
             	if (!isCreator) throw mess.owner
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                 let nama = store.messages[i].array[0].pushName
                 teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n\n───────────────\n\n`
                 let buttons = [{ buttonId: 'donasi', buttonText: { displayText: '👑 SEWA' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: '❗Rules' }, type: 1 }]
                 await naze.sendButtonText(m.chat, buttons, teks, nyoutube, m, {mentions: [i], quoted: fkontak})
                 }}
                 break
                 
case 'listgc': {
             	if (!isCreator) throw mess.owner
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                 let metadata = await naze.groupMetadata(i)
                 teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n─────────────────\n\n`
                 let buttons = [{ buttonId: 'donasi', buttonText: { displayText: '👑 SEWA' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: '❗Rules' }, type: 1 }]
                 await naze.sendButtonText(m.chat, buttons, teks, nyoutube, m, {mentions: [metadata.owner], quoted: fkontak})
                  }}
                 break
            
case 'setowner': {
               if (!isCreator) throw mess.owner
               if (m.text.includes('@')) return m.reply(`*Invalid!*\n\n*Pake Nomer Woy*\n*Jangan Pakai Tag!*`)
               if (!text) throw `Example : ${prefix + command} 6285875158363`
               global.owner = text
               global.ownernomer = text
               m.reply(`Owner berhasil diubah menjadi\n\n⭔ Owner : ${global.owner}\n⭔ OwnerNumber : ${global.ownernomer}`)
               }
               break
       
case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await naze.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                await sleep(1500)
                let txt = `「 Broadcast Bot 」\n\n${text}`
                let buttons = [{ buttonId: 'donasi', buttonText: { displayText: 'SEWA' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: '❗Rules' }, type: 1 }]
                await naze.sendButtonText(i, buttons, txt, nyoutube, m, {quoted: fkontak})
                 }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
                 }
                break

case 'bc': case 'bcall': {
             if (!isCreator) throw mess.owner
             if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
             let anu = await store.chats.all().map(v => v.id)
             m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		     for (let yoi of anu) {
		     await sleep(1500)
		     let txt = `「 Broadcast Bot 」\n\n${text}`
		     let buttons = [{ buttonId: 'donasi', buttonText: { displayText: '👑 SEWA' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: '❗Rules' }, type: 1 }]
             await naze.sendButtonText(yoi, buttons, txt, nyoutube, m, {quoted: fkontak})
		      }
		     m.reply('Sukses Broadcast')
              }
             break
            
case 'q': case 'quoted': {
              	if (!isCreator) throw mess.owner
                  try {
		          if (!m.quoted) return m.reply('Reply Pesannya!!')
		          let wokwol = await naze.serializeM(await m.getQuotedObj())
		          if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		          await wokwol.quoted.copyNForward(m.chat, true)
		           } catch (e) {
		          m.reply(mess.errmor)}
                  }
	              break
                
case 'buggc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isCreator) throw mess.owner
                m.reply(mess.wait)
                m.reply(mess.error)
                }
                break
                                
case 'sendbug': {
                if (!isCreator) throw mess.owner
                m.reply(mess.wait)
                m.reply(mess.error)
                }
                break   
             
case 'bugcall': {
                if (!isCreator) throw mess.owner
                m.reply(mess.wait)
                m.reply(mess.error)
                }
                break
                                
case 'endgroup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isCreator) throw mess.owner
                m.reply(mess.wait)
                m.reply(mess.error)
                }
                break
                

//PEMBATAS LAINNYA=======================================
case 'rules': {
                rules = `*[ Rules BOT ]*\n\n1. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim\n\n2. Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi\n\n3. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot\n\n4. Apapun yang anda perintah pada bot ini, KAMI TIDAK AKAN BERTANGGUNG JAWAB!\n\n5. Jangan spam bot.\n6. Jangan telepon bot.\n7. Jangan mengeksploitasi bot\n\nKonsekuensi Bila Melanggar Rules Bot Akan Memblokir Kamu Atau Keluar Dari Grup Yang Kamu Kelola,\n\nRules ini untuk kenyamanan semua yang memakai bot ini.\n\nThanks !\n`
                let buttons = [{ buttonId: 'bilek2', buttonText: { displayText: '\nIni apaan sih, gak ngerti gw, yg penting gw mau ngegay dah, ada yg mau ngegay sama gw gak?' }, type: 1 }]
                await naze.sendButtonText(m.chat, buttons, rules, nyoutube, m, {quoted: fkontak})
                }
                break
                      
case 'donasi': case 'sewabot': case 'sewa': case 'donate': {
                let buttons = [{ buttonId: 'bilek', buttonText: { displayText: '\nMaaf nih ya, gw sekarang mau jujur kalau gw nih sering coli, capek sih tapi gpp dah jadi kebiasaan gw' }, type: 1 }]
                let buttonMessage = {
                image: { url: 'https://telegra.ph/file/b0f456032122883ff5e62.jpg' },
                caption: `*${ucapanWaktu} Kak ${m.pushName}*\n\n *Jika ingin berdonasi silahkan scan gambar diatas*\n\n JIKA INGIN SEWA BOT KLIK LINK DIBAWAH INI:\n• https://wa.me/p/8280632638628698/62895323263224\n`,
                footer: nyoutube,
                buttons: buttons,
                headerType: 4
                }
                naze.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break
                             
case 'ownerz': case 'owner': case 'creator': {
                 naze.sendContact(m.chat, global.owner, m)
                 }
                 break
                             
case 'sc': { m.reply('https://wa.me/p/5578111805565732/62895323263224')} break
            
case 'runtime': {
            	let lowq = `*Bot Telah Online Selama*\n*${runtime(process.uptime())}*`
                naze.sendMessage(m.chat, { text: lowq }, {quoted: fkontak})
                naze.setStatus(`${naze.user.name} | Runtime : ${runtime(process.uptime())}`)
            	}
                break
                 
case 'bilek': { m.reply('Astagfirullah tobat lah om')} break
case 'bilek1': { m.reply('Astagfirullah om jangan om, aku masih kecil om🥺')} break
case 'bilek2': { m.reply('Waduh om😫')} break
case 'bilek3': { m.reply('Owh, langsung di pribadi chat dia aja kak')} break
case 'bilek4': { m.reply('Hadeh, gombal😒')} break
case 'bilek5': { m.reply('Hadeh Bucin😂')} break
case 'bilek6': { m.reply('😂')} break

           
//PEMBATAS MENU=======================================
case 'allmenu': case 'menu': case 'help':{
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let jawab = `
Halo👋🏻, ${ucapanWaktu} Kak ${pushname}
            
 𝙄𝙉𝙁𝙊 𝙐𝙎𝙀𝙍
 Nama: ${pushname}
 Number: @${me.split('@')[0]}
 Status: ${isPremium ? 'Premium' : `Geratisan`}
 Limit: ${isPremium ? '♾Infinity' : `${db.data.users[m.sender].limit}`}

 𝙄𝙉𝙁𝙊 𝘽𝙊𝙏
 Nama Bot: ${botname}
 Owner: @${ownernya.split('@')[0]}
 Mode: ${naze.public ? 'Public' : `Self`}
 Total Hit: ${jumlahcmd}
 Total Hit Today: ${jumlahharian}
 Runtime: ${runtime(process.uptime())}


┌──⭓ *Group Menu*
│
│⭔ ${prefix}linkgc
│⭔ ${prefix}ephemeral
│⭔ ${prefix}revoke
│⭔ ${prefix}setppgc
│⭔ ${prefix}setname
│⭔ ${prefix}setdesc
│⭔ ${prefix}editinfo
│⭔ ${prefix}open
│⭔ ${prefix}close
│⭔ ${prefix}opentime
│⭔ ${prefix}closetime
│⭔ ${prefix}add
│⭔ ${prefix}kick
│⭔ ${prefix}antilink
│⭔ ${prefix}hidetag
│⭔ ${prefix}tagall
│⭔ ${prefix}tagme
│⭔ ${prefix}totag
│⭔ ${prefix}mute
│⭔ ${prefix}unmute
│⭔ ${prefix}promote
│⭔ ${prefix}demote
│⭔ ${prefix}listonline
│⭔ ${prefix}afk
│⭔ ${prefix}poll
│⭔ ${prefix}jodohku
│⭔ ${prefix}jadian
│⭔ ${prefix}fitnah
└───────⭓

┌──⭓ *Downloader Menu*
│
│⭔ ${prefix}play
│⭔ ${prefix}ytmp3
│⭔ ${prefix}ytmp4
│⭔ ${prefix}ytsearch
│⭔ ${prefix}tiktok
│⭔ ${prefix}facebook
│⭔ ${prefix}instagram
│⭔ ${prefix}twitter
│⭔ ${prefix}pinterest
│⭔ ${prefix}google
└───────⭓

┌──⭓ *Convert Menu*
│
│⭔ ${prefix}sticker
│⭔ ${prefix}smeme
│⭔ ${prefix}attp
│⭔ ${prefix}ttp
│⭔ ${prefix}toimg
│⭔ ${prefix}emojimix
│⭔ ${prefix}emoji
│⭔ ${prefix}tovideo
│⭔ ${prefix}togif
│⭔ ${prefix}tourl
│⭔ ${prefix}tovn
│⭔ ${prefix}tomp3
│⭔ ${prefix}tinyurl
│⭔ ${prefix}linkpoi
└───────⭓

┌──⭓ *Main Menu*
│
│⭔ ${prefix}ping
│⭔ ${prefix}runtime
│⭔ ${prefix}lapor
│⭔ ${prefix}request
│⭔ ${prefix}delete
│⭔ ${prefix}q
│⭔ ${prefix}sc
│⭔ ${prefix}menfes
└───────⭓

┌──⭓ *Database Menu*
│
│⭔ ${prefix}setcmd
│⭔ ${prefix}listcmd
│⭔ ${prefix}delcmd
│⭔ ${prefix}lockcmd
│⭔ ${prefix}addmsg
│⭔ ${prefix}listmsg
│⭔ ${prefix}getmsg
│⭔ ${prefix}delmsg
└───────⭓

┌──⭓ *Voice Changer*
│
│⭔ ${prefix}bass
│⭔ ${prefix}blown
│⭔ ${prefix}deep
│⭔ ${prefix}earrape
│⭔ ${prefix}fast
│⭔ ${prefix}fat
│⭔ ${prefix}nightcore
│⭔ ${prefix}reverse
│⭔ ${prefix}robot
│⭔ ${prefix}slow
│⭔ ${prefix}tupai
└───────⭓

┌──⭓ *Sound Menu*
│
│⭔ ${prefix}dj1 (dj1 - jd25)
└───────⭓

┌──⭓ *Owner Menu*
│
│⭔ ${prefix}self
│⭔ ${prefix}public
│⭔ ${prefix}chat
│⭔ ${prefix}join
│⭔ ${prefix}leave
│⭔ ${prefix}block
│⭔ ${prefix}unblock
│⭔ ${prefix}bcgc
│⭔ ${prefix}bcall
│⭔ ${prefix}setppbot
│⭔ ${prefix}exif
│⭔ ${prefix}listpc
│⭔ ${prefix}listgc
│⭔ ${prefix}setmenu
│⭔ ${prefix}buggc
│⭔ ${prefix}sendbug
│⭔ ${prefix}bugcall
│⭔ ${prefix}endgroup
└───────⭓
`
            let ments = [ownernya, me, ini_mark]
            let buttons = [{ buttonId: 'owner', buttonText: { displayText: 'Owner' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'Rules' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'Donasi' }, type: 1 }]
            let buttonMessage = {
  document: fs.readFileSync('./media/doc/fake.pptx'),
  fileName : akulaku,
  mimetype: `${filsk}`,
  fileLength: jumhal,
  pageCount: jumlha,
  caption: jawab,
  footer: nyoutube,
  buttons: buttons,
  mentions: ments,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: 'Bot WhatsApp Simple | By Ryn (Zenz)',
  body: 'www.instagram.com/yanz_5008', 
  showAdAttribution: true,
  thumbnail: thumb,
  mediaType: 2,
  mediaUrl: myytv,
  sourceUrl: myyt
  }}
  }
naze.sendMessage(m.chat, buttonMessage, {quoted: fkontak})
const slkn = fs.readFileSync('./audio/menu.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
 }
 break


//SoundMenu
case 'dj1': {
const slkn = fs.readFileSync('./audio/dj1.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })} break
case 'dj2': {
const slkn = fs.readFileSync('./audio/dj2.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })} break
case 'dj3': {
const slkn = fs.readFileSync('./audio/dj3.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })} break
case 'dj4': {
const slkn = fs.readFileSync('./audio/dj4.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })} break
case 'dj5': {
const slkn = fs.readFileSync('./audio/dj5.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })} break
case 'dj6': {
const slkn = fs.readFileSync('./audio/dj6.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })} break
case 'dj7': {
const slkn = fs.readFileSync('./audio/dj7.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })} break
case 'dj8': {
const slkn = fs.readFileSync('./audio/dj8.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })} break
case 'dj9': {
const slkn = fs.readFileSync('./audio/dj9.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })} break
case 'dj10': {
const slkn = fs.readFileSync('./audio/dj10.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })} break
case 'dj11': {
const slkn = fs.readFileSync('./audio/dj11.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })} break
case 'dj12': {
const slkn = fs.readFileSync('./audio/dj12.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })} break
case 'dj13': {
const slkn = fs.readFileSync('./audio/dj13.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })} break
case 'dj14': {
const slkn = fs.readFileSync('./audio/dj14.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })} break
case 'dj15': {
const slkn = fs.readFileSync('./audio/dj15.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })} break
case 'dj16': {
const slkn = fs.readFileSync('./audio/dj16.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })} break
case 'dj17': {
const slkn = fs.readFileSync('./audio/dj17.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })} break
case 'dj18': {
const slkn = fs.readFileSync('./audio/dj18.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })} break
case 'dj19': {
const slkn = fs.readFileSync('./audio/dj19.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })} break
case 'dj20': {
const slkn = fs.readFileSync('./audio/dj20.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })} break
case 'dj21': {
const slkn = fs.readFileSync('./audio/dj21.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })} break
case 'dj22': {
const slkn = fs.readFileSync('./audio/dj22.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })} break
case 'dj23': {
const slkn = fs.readFileSync('./audio/dj23.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })} break
case 'dj24': {
const slkn = fs.readFileSync('./audio/dj24.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })} break
case 'dj25': {
const slkn = fs.readFileSync('./audio/dj25.mp3');
await naze.sendMessage(m.chat, { audio: slkn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })} break

            
//Habis Om
default:
       if (budy.startsWith('=>')) {
       if (!isCreator) return m.reply(mess.owner)
        function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    naze.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
    } catch (err) {
        m.reply(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
