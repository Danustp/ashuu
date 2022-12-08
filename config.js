const fs = require('fs')
const chalk = require('chalk')
// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}
//Other
global.botname = 'Zenz BOT'
global.ownername = 'Ryan (Zenz)'
global.akulaku = 'Bot Wangsaff Private'
global.ytname = 'Yanz_5008'
global.owner = ['6285752235008','628988392437']
global.ownernomer = "6285752235008"
global.premium = ['6285752235008']
global.packname = 'Sticker By Zenz'
global.author = 'IG : Yanz_5008'
global.sessionName = 'nazedev'  //jangan diganti bro nanti error
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['','!','.','#','&']
global.sp = ''

// Setting Mess
global.mess = {
    success: '𝘋𝘰𝘯𝘦 √',
    admin: '𝘛𝘩𝘪𝘴 𝘧𝘦𝘢𝘵𝘶𝘳𝘦 𝘤𝘢𝘯 𝘰𝘯𝘭𝘺 𝘣𝘦 𝘶𝘴𝘦𝘥 𝘣𝘺 𝘢𝘥𝘮𝘪𝘯𝘴!',
    botAdmin: '𝘛𝘩𝘪𝘴 𝘍𝘦𝘢𝘵𝘶𝘳𝘦 𝘊𝘢𝘯 𝘖𝘯𝘭𝘺 𝘉𝘦 𝘜𝘴𝘦𝘥 𝘈𝘧𝘵𝘦𝘳 𝘛𝘩𝘪𝘴 𝘕𝘶𝘮𝘣𝘦𝘳 𝘉𝘦𝘤𝘰𝘮𝘦𝘴 𝘈𝘥𝘮𝘪𝘯!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa / Chat Owner',
    owner: '𝘛𝘩𝘪𝘴 𝘧𝘦𝘢𝘵𝘶𝘳𝘦 𝘤𝘢𝘯 𝘰𝘯𝘭𝘺 𝘣𝘦 𝘶𝘴𝘦𝘥 𝘣𝘺 𝘥𝘦𝘷𝘦𝘭𝘰𝘱𝘦𝘳!',
    group: '𝘛𝘩𝘪𝘴 𝘧𝘦𝘢𝘵𝘶𝘳𝘦 𝘤𝘢𝘯 𝘰𝘯𝘭𝘺 𝘣𝘦 𝘶𝘴𝘦𝘥 𝘪𝘯 𝘨𝘳𝘰𝘶𝘱𝘴!',
    private: 'Only For Private Chats!',
    bot: 'Special Features for Bot Number Users',
    wait: '𝘞𝘢𝘪𝘵 𝘢 𝘮𝘪𝘯𝘶𝘵𝘦, 𝘪𝘯 𝘱𝘳𝘰𝘨𝘳𝘦𝘴𝘴...',
    error: '⚠︎ 𝘌𝘳𝘳𝘰𝘳',
    errapi: 'Error Mungkin Apikey Tidak Valid!',
    errmor: 'Error Kesalahan Sistem',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
// Limit
global.limitawal = {
    premium: "Infinity",
    free: 25
}
// Fake
global.thumb = fs.readFileSync('./media/image/naze.jpg')
global.faall = fs.readFileSync('./media/image/fake.jpg')
// Url
global.mygit = 'https://github.com/yanz5008'
global.myyt = 'https://instagram.com/yanz_5008' 
global.myytv = 'https://www.instagram.com/reel/CkTlouPDC_s/?igshid=YmMyMTA2M2Y='
global.mygc = "https://www.instagram.com/reel/CkTlouPDC_s/?igshid=YmMyMTA2M2Y="

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})