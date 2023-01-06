const { MessageButton } = require("discord-buttons");
const { MessageEmbed } = require("discord.js");
const settings = require('../../../settings')
module.exports.run = async (client, message, args, durum, kanal) => {
    if (message.member.permissions.has(8) || !client.ayarlar.sahip.some(x => x == message.author.id)) {

let x = new MessageButton().setStyle('green').setLabel('Log Kanallarını Kur!').setID('x')
let y = new MessageButton().setStyle('green').setLabel('Emojileri Kur!').setID('y')
let close = new MessageButton().setStyle('red').setLabel('Sayfayı Kapat!').setID('close')

let mesaj = await message.channel.send(`Aşağıdaki butonları kullanarak kurulum yapınız!`, { buttons: [x,y,close] })

client.on('clickButton', async (button) => {
    if (button.id === 'x') {
      await Logs()
      await PenalLogs()
        button.reply.send(`Kuruluyor...`).then(x => x.delete({ timeout: 5000 }));
      await mesaj.edit(` \`\`\`fix\nLog Kanalları Başarıyla Kuruldu!\`\`\` `,{ buttons: [y,close] })
    }
    if (button.id === 'y') {
        await EmojisC()
        button.reply.send(`Kuruluyor...`).then(x => x.delete({ timeout: 5000 }));
        await mesaj.edit(` \`\`\`fix\nEmojiler Başarıyla Kuruldu\`\`\` `,{ buttons: [close] })
    }
    if (button.id === 'close') {
        await mesaj.edit(`bb`).then(x => x.delete({ timeout: 100 }))
    }
  });
}
}
exports.conf = {
    aliases: []
}
exports.help = {
    name: 'msetup',
    description: "Bot için gerekli argümantları kurmaya yarar.",
    usage: 'msetup',
    kategori: "Bot Yapımcısı"
  };

async function Logs() {
    let guild = client.guilds.cache.get(settings.sunucuId);
        guild.channels.create("† Witcher Log's", {type : "category"}).then(ct => {
        guild.channels.create("ses_log", {type : "text"}).then(x => { x.setParent(ct.id) } )
        guild.channels.create("rol_log", {type : "text"}).then(x => { x.setParent(ct.id) })
        guild.channels.create("nickname_log", {type : "text"}).then(x => { x.setParent(ct.id) })
        guild.channels.create("join_leave_log", {type : "text"}).then(x => { x.setParent(ct.id) })
        guild.channels.create("mesaj_silme_log", {type : "text"}).then(x => { x.setParent(ct.id) })
        guild.channels.create("mesaj_edit_log", {type : "text"}).then(x => { x.setParent(ct.id) })
        guild.channels.create("komut_log", {type : "text"}).then(x => { x.setParent(ct.id) })
        guild.channels.create("tag_log", {type : "text"}).then(x => { x.setParent(ct.id) })
        guild.channels.create("rol-ver-log", {type : "text"}).then(x => { x.setParent(ct.id) })
          })
}
async function PenalLogs() {
    let guild = client.guilds.cache.get(settings.sunucuId);
        guild.channels.create("† Witcher Penals's", {type : "category"}).then(ct => {
        guild.channels.create("ban-bilgi", {type : "text"}).then(x => { x.setParent(ct.id) } )
        guild.channels.create("mute-bilgi", {type : "text"}).then(x => { x.setParent(ct.id) })
        guild.channels.create("vmute-bilgi", {type : "text"}).then(x => { x.setParent(ct.id) })
        guild.channels.create("jail-bilgi", {type : "text"}).then(x => { x.setParent(ct.id) })
        guild.channels.create("ceza-puan-bilgi", {type : "text"}).then(x => { x.setParent(ct.id) })
        guild.channels.create("reklam-bilgi", {type : "text"}).then(x => { x.setParent(ct.id) })
          })
}
async function EmojisC() {
    let guild = client.guilds.cache.get(settings.sunucuId);
    let onay = "https://cdn.discordapp.com/emojis/802098678369091594.gif?v=1";
    let onay2 = "https://cdn.discordapp.com/emojis/673576252241608714.gif?v=1";
    let iptal = "https://cdn.discordapp.com/emojis/673576480487506011.gif?v=1"; 
    let bosta = "https://cdn.discordapp.com/emojis/673576453140512788.png?v=1";
    let rahatsizetmeyin = "https://cdn.discordapp.com/emojis/673576231433797664.png?v=1";
    let gorunmez = "https://cdn.discordapp.com/emojis/673576417224556611.png?v=1";
    let cevrimici = "https://cdn.discordapp.com/emojis/673576292205068314.png?v=1";
    let yildiz = "https://cdn.discordapp.com/emojis/805454400139165737.gif?v=1";
    let shelby_vmute = "https://cdn.discordapp.com/attachments/811975658963992647/812894209706950656/sesmuteat.png";
    let shelby_mute = "https://cdn.discordapp.com/attachments/811975658963992647/812894244632788992/muteat.png";
    let shelby_vunmute = "https://cdn.discordapp.com/attachments/811975658963992647/812894192530751518/sesmuteac.png";
    let shelby_unmute = "https://cdn.discordapp.com/attachments/811975658963992647/812894234242973716/muteac.png";
    let shelby_stat = "https://cdn.discordapp.com/emojis/813380585338699806.png?v=1";
    let shelby_erkek = "https://cdn.discordapp.com/emojis/782554741896773633.gif?v=1";
    let shelby_kadin = "https://cdn.discordapp.com/emojis/782554741669888000.gif?v=1";
    let shelby_bitisbar = "https://cdn.discordapp.com/emojis/812591747393650728.gif?v=1";
    let shelby_solbar =  "https://cdn.discordapp.com/emojis/812591747401646100.gif?v=1";
    let shelby_ortabar = "https://cdn.discordapp.com/emojis/813380548768563250.gif?v=1";
    let shelby_baslangicbar = "https://cdn.discordapp.com/emojis/813380552924594216.png?v=1";
    let shelby_gribitisbar = "https://cdn.discordapp.com/emojis/813825131674730528.png?v=1";
    let shelby_griortabar = "https://cdn.discordapp.com/emojis/813441171489292348.png?v=1";
    let shelby_deynek = "https://cdn.discordapp.com/emojis/794553871405285386.gif?v=1"
    let reward = "https://cdn.discordapp.com/emojis/833709587512164373.png?size=96";
    let netflix = "https://cdn.discordapp.com/emojis/901502876113842176.png?size=96";
    let exxen = "https://cdn.discordapp.com/emojis/901502876617146378.png?size=96";
    let blutv = "https://cdn.discordapp.com/emojis/901502878030643220.png?size=96";
    let nitro = "https://cdn.discordapp.com/emojis/901502877212745738.png?size=96";
    let spotify = "https://cdn.discordapp.com/emojis/901502878370381915.png?size=96";
    let message = "https://cdn.discordapp.com/emojis/834211561278144562.png?size=96";
    let voice = "https://cdn.discordapp.com/emojis/834211738748583956.png?size=96";
    let boost = "https://cdn.discordapp.com/emojis/834212641337507900.png?size=96";
    let coin = "https://cdn.discordapp.com/emojis/833870273190821899.gif?size=96";
    let boostcoin = "https://cdn.discordapp.com/emojis/833709587907477525.png?size=96";
    let jp_coin = "https://cdn.discordapp.com/emojis/838400444572499968.gif?size=96";
    let jp_bar = "https://cdn.discordapp.com/emojis/838400444468428830.gif?size=96";
    let jp_lemon = "https://cdn.discordapp.com/emojis/838979178346315827.gif?size=96";
    let jp_cherry = "https://cdn.discordapp.com/emojis/838979178711351377.gif?size=96"
    let jp_seven = "https://cdn.discordapp.com/emojis/838979177846931467.gif?size=96";
    let jp_grapes = "https://cdn.discordapp.com/emojis/838979177666969612.gif?size=96";
    let jp_diamond = "https://cdn.discordapp.com/emojis/838979177520693268.gif?size=96";
    let jp_bell = "https://cdn.discordapp.com/emojis/838979176802942977.gif?size=96";
    let coinflip = "https://cdn.discordapp.com/emojis/834110675718111242.gif?size=96";
    let shelbystatlan = "https://cdn.discordapp.com/emojis/899298262849298462.gif?size=96"
  
    guild.emojis.create(shelbystatlan, "shelbystatlan")
    guild.emojis.create(netflix, "netflix")
    guild.emojis.create(exxen, "exxen")
    guild.emojis.create(blutv, "blutv")
    guild.emojis.create(nitro, "nitro")
    guild.emojis.create(spotify, "spotify")
    guild.emojis.create(message, "message")
    guild.emojis.create(voice, "voice")
    guild.emojis.create(boost, "boost")
    guild.emojis.create(coin, "coin")
    guild.emojis.create(boostcoin, "boostcoin")
    guild.emojis.create(jp_coin, "jp_coin")
    guild.emojis.create(jp_bar, "jp_bar")
    guild.emojis.create(jp_lemon, "jp_lemon")
    guild.emojis.create(jp_cherry, "jp_cherry")
    guild.emojis.create(jp_seven, "jp_seven")
    guild.emojis.create(jp_grapes, "jp_grapes")
    guild.emojis.create(jp_diamond, "jp_diamond")
    guild.emojis.create(jp_bell, "jp_bell")
    guild.emojis.create(coinflip, "coinflip")
    guild.emojis.create(reward, "reward")

    guild.emojis.create(shelby_vmute, "shelby_vmute")
    guild.emojis.create(shelby_mute, "shelby_mute")
    guild.emojis.create(shelby_vunmute, "shelby_vunmute")
    guild.emojis.create(shelby_unmute, "shelby_unmute")
    guild.emojis.create(shelby_deynek, "shelby_deynek")
    guild.emojis.create(shelby_stat, "shelby_stat")
    guild.emojis.create(onay, "shelby_tik")
    guild.emojis.create(iptal, "shelby_iptal")
    guild.emojis.create(bosta, "shelby_away")
    guild.emojis.create(rahatsizetmeyin, "shelby_dnd")
    guild.emojis.create(gorunmez, "shelby_offline")
    guild.emojis.create(cevrimici, "shelby_online")
    guild.emojis.create(shelby_baslangicbar, "shelby_baslangicbar")
    guild.emojis.create(shelby_bitisbar, "shelby_bitisbar")
    guild.emojis.create(shelby_solbar, "shelby_solbar")
    guild.emojis.create(shelby_ortabar, "shelby_ortabar")
    guild.emojis.create(shelby_gribitisbar, "shelby_gribitisbar")
    guild.emojis.create(shelby_griortabar, "shelby_griortabar")
    guild.emojis.create(yildiz, "yildiz")
}
