const disbut = require("discord-buttons");
let sunucuayar = require("../../models/sunucuayar");
module.exports.run = async (client, message, args, durum, kanal) => {
    if (!client.ayarlar.sahip.some(x => x == message.author.id)) return;

let eventvericik = await eventayar.findOne({});
let vericik = await sunucuayar.findOne({});

let etkinlik = new disbut.MessageButton().setStyle('green').setLabel('🎉 Etkinlik Katılımcısı!').setID('etkinlik')
let cekilis = new disbut.MessageButton().setStyle('red').setLabel('🎁 Çekiliş Katılımcısı!').setID('cekilis')
message.channel.send(``, { buttons: [] })


client.on('clickButton', async (button) => {
    if (button.id === 'etkinlik') {}
  });
}

exports.conf = {
    aliases: []
}
exports.help = {
    name: 'xs',
    description: "",
    usage: 'xs',
    kategori: "Bot Yapımcısı"
};