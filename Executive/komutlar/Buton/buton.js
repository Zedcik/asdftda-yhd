const disbut = require("discord-buttons");
let eventayar = require("../../models/eventsetup");
let sunucuayar = require("../../models/sunucuayar");
module.exports.run = async (client, message, args, durum, kanal) => {
    if (!client.ayarlar.sahip.some(x => x == message.author.id)) return;

let eventvericik = await eventayar.findOne({});
let vericik = await sunucuayar.findOne({});
let nitro = client.emojis.cache.find(x => x.name == "nitro")
let spotify = client.emojis.cache.find(x => x.name == "spotify")
let netflix = client.emojis.cache.find(x => x.name == "netflix")
let exxen = client.emojis.cache.find(x => x.name == "exxen")
let blutv = client.emojis.cache.find(x => x.name == "blutv")

let etkinlik = new disbut.MessageButton().setStyle('green').setLabel('🎉 Etkinlik Katılımcısı!').setID('etkinlik')
let cekilis = new disbut.MessageButton().setStyle('red').setLabel('🎁 Çekiliş Katılımcısı!').setID('cekilis')
message.channel.send(`**†** Merhaba arkadaşlar, 

**† Witcher** sunucusu olarak yapılan etkinlik ve çekilişlerden anında bildirim almanız için yapılan sistemi size sunuyoruz.

Çekiliş katılımcısı alarak ${nitro}, ${spotify}, ${netflix}, ${exxen}, ${blutv} gibi çekilişlere katılıp ödüllerin sahibi olabilirsiniz.

Aşağıda ki seçim menüsünden etkinlik katılımcısı alarak da yapılan konserlerden, etkinliklerden anında haberdar olabilirsiniz.`

, { buttons: [cekilis,etkinlik] })

let config = {
    "etkinlik": "1013917928913121392",
    "cekilis": "1013917929902981300",
}
client.on('clickButton', async (button) => {
    if (button.id === 'etkinlik') {
        if (button.clicker.member.roles.cache.get(config.etkinlik)) {
            await button.clicker.member.roles.remove(config.etkinlik);
            await button.reply.think(true);
            await button.reply.edit("Rollerin Düzenlendi.")
        } else {
            await button.clicker.member.roles.add(config.etkinlik);
            await button.reply.think(true);
            await button.reply.edit("Rollerin Düzenlendi.")
        }
    }
    if (button.id === 'cekilis') {
        if (button.clicker.member.roles.cache.get(config.cekilis)) {
            await button.clicker.member.roles.remove(config.cekilis);
            await button.reply.think(true);
            await button.reply.edit("Rollerin Düzenlendi.")
        } else {
            await button.clicker.member.roles.add(config.cekilis);
            await button.reply.think(true);
            await button.reply.edit("Rollerin Düzenlendi.")
        }
    }
  });
}

exports.conf = {
    aliases: []
}
exports.help = {
    name: 'buton',
    description: "Sunucudaki etkinlik rolleri için sistem kurar.",
    usage: 'buton',
    kategori: "Bot Yapımcısı"
};
