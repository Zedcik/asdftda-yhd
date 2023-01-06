const { MessageEmbed,Discord } = require("discord.js");
const conf = client.ayarlar;
module.exports.run = async (client, message, args, durum, kanal) => {
    if (!message.guild) return;

    let db = await client.db.find({ guildID: message.guild.id });
    message.channel.send(`Özel Perm Bilgileri:`, {code: "fix"})
return message.channel.send(db.map((x, index) => `
(${index+1}) [${x.komutAd}] ••❯ ${x.roller.map(x => message.guild.roles.cache.get(x)) ? x.roller.map(x => message.guild.roles.cache.get(x).name).toString() : "Rol Yok"}`).join("\n"), { split: true, code: "css" })
            
};
exports.conf = {
    aliases: ["xrd"]
};
exports.help = {
    name: 'xrd',
    description: "Komutların kullanımını açar.",
    usage: 'xrd',
    kategori: "Bot Yapımcısı"
  };
