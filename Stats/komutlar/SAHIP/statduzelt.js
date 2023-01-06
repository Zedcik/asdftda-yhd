let Stat = require("../../models/stats");
  module.exports.run = async (client, message, args, durum, kanal) => {
    if (!message.guild) return;

    if(!client.ayarlar.sahip.some(x => x == message.author.id)) return

      let stats = await Stat.find({})

      stats.forEach(async (data) => {
         if (!message.guild.members.cache.get(data.userID) || !message.guild.members.cache.get(data.userID).user.username.includes("ζ")) {
            await Stat.deleteMany({ userID: data.userID }).exec()
         } 
    });
  };

exports.conf = {
  aliases: ["ssd"]
};
exports.help = {
  name: "ssd"
};
