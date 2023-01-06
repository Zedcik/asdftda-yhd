const moment = require("moment")
const Discord = require("discord.js")
moment.locale("tr")
const streamDenetleme = require('../models/streamer')
const ms = require('ms')

  module.exports = async (member, voiceChannel) => {
    streamDenetleme.findOne({ user: member.id }, async (err, res) => {
        if (res) {
          function getcontent(remainingTime) {
            let roundTowardsZero = remainingTime > 0 ? Math.floor : Math.ceil;
            let days = roundTowardsZero(remainingTime / 86400000),
            hours = roundTowardsZero(remainingTime / 3600000) % 24,
            minutes = roundTowardsZero(remainingTime / 60000) % 60,
            seconds = roundTowardsZero(remainingTime / 1000) % 60;
        
            let arr = []
            if(days !== 0) arr.push(`${days} gün`)
            if(hours !== 0) arr.push(`${hours} saat`)
            if(minutes !== 0) arr.push(`${minutes} dakika`)
            if(seconds !== 0) arr.push(`${seconds} saniye`)
        
            return arr.join(", ")
        }
        let embed = new Discord.MessageEmbed()
        .setAuthor(member.user.tag , member.user.displayAvatarURL({dynamic: true}))
        .setDescription(`<@${res.user}> kullanıcısı **${getcontent(Date.now() - res.baslangic.getTime())}** yayın yapmış.\nBaşlangıç tarihi: **${moment(res.baslangic).format('MMMM Do YYYY, h:mm:ss')}**\nYayın yaptığı kanal: <#${res.channelID}>`)
        .setColor('RANDOM')
        client.channels.cache.get("993224734441492550").send(embed)
        setTimeout(() => {
          res.delete().catch(e => console.log(e))
        }, 1000);  
      }
    })
  }
