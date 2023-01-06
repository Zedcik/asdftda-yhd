const moment = require("moment")
moment.locale("tr")
const streamDenetleme = require('../models/streamer')
const ms = require('ms')
  module.exports = async (member, voiceChannel) => {
    streamDenetleme.findOne({ user: member.id }, async (err, res) => {
        if (!res) {
            const data = new streamDenetleme({
                user: member.id,
                baslangic: Date.now(),
            channelName: voiceChannel.name,
            channelID: voiceChannel.id
            })
           if(voiceChannel.parentID == "993210935965655080"){
            data.save().catch(e => console.log(e))
           }
        }
    })
  }