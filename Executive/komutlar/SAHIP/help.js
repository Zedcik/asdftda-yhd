const {MessageEmbed} = require("discord.js");
const disbut = require("discord-buttons");
let ozelKomut = require("../../models/özelkomut");

exports.run = async (client, message, args, durum, kanal) => {
  let data = await ozelKomut.find({guildID: message.guild.id}) || [];


   let komutlar= client.commands.filter(x=> x.help.usage && x.help.kategori && x.help.kategori === "Bot Yapımcısı").map(x=> `\`${client.ayarlar.prefix[0]}${x.help.name} ${x.help.usage}\``).join("\n")
   let komutlar2= client.commands.filter(x=> x.help.usage && x.help.kategori && x.help.kategori === "Yönetici Komutları").map(x=> `\`${client.ayarlar.prefix[0]}${x.help.name} ${x.help.usage}\``).join("\n")
   let komutlar3= client.commands.filter(x=> x.help.usage && x.help.kategori && x.help.kategori === "Yetkili Komutları").map(x=> `\`${client.ayarlar.prefix[0]}${x.help.name} ${x.help.usage}\``).join("\n")
   let komutlar4= client.commands.filter(x=> x.help.usage && x.help.kategori && x.help.kategori === "Stat Komutları").map(x=> `\`${client.ayarlar.prefix[0]}${x.help.name} ${x.help.usage}\``).join("\n")
   let komutlar5= client.commands.filter(x=> x.help.usage && x.help.kategori && x.help.kategori === "Yönetim Komutları").map(x=> `\`${client.ayarlar.prefix[0]}${x.help.name} ${x.help.usage}\``).join("\n")

   let özelkomutlar= data.length > 0 ? data.map(x => `\`${client.ayarlar.prefix[0]}${x.komutAd} @etiket\``).join("\n"): "Özel Komut Yoktur."
   
let embed = new MessageEmbed().setColor("RANDOM").setDescription(`${komutlar}`).setAuthor("Bot Yapımcısı")


let embed2 = new MessageEmbed().setColor("RANDOM").setDescription(`
${komutlar2}
${komutlar5}
\`${client.ayarlar.prefix[0]}kayıtsız @etiket\`
\`${client.ayarlar.prefix[0]}say\`
\`${client.ayarlar.prefix[0]}sesli\`
`).setAuthor("Yönetici/Yönetim Komutları")


let embed3 = new MessageEmbed().setColor("RANDOM").setDescription(`
${komutlar3}
\`${client.ayarlar.prefix[0]}taglı @etiket\`
`).setAuthor("Yetkili Komutları")

let embed4 = new MessageEmbed().setColor("RANDOM").addField("Moderasyon Komutları",`

\`${client.ayarlar.prefix[0]}underworld @etiket [süre]\`
\`${client.ayarlar.prefix[0]}banbilgi [userID]\`
\`${client.ayarlar.prefix[0]}ceza-bilgi @etiket / [userID]\`
\`${client.ayarlar.prefix[0]}cezaID [ID]\`
\`${client.ayarlar.prefix[0]}cezalar @etiket / [userID]\`
\`${client.ayarlar.prefix[0]}dc-cezalı @etiket [süre] [sebep]\`
\`${client.ayarlar.prefix[0]}mute @etiket [süre] [sebep]\`
\`${client.ayarlar.prefix[0]}reklam @etiket\`
\`${client.ayarlar.prefix[0]}jail @etiket [süre] [sebep]\`
`,true)
.addField("Stat Komutları",`
${komutlar4}
\`${client.ayarlar.prefix[0]}level @etiket\`
\`${client.ayarlar.prefix[0]}stat @etiket\`
\`${client.ayarlar.prefix[0]}ses-bilgi @etiket\`
\`${client.ayarlar.prefix[0]}top\``,true)

let embed6 = new MessageEmbed().setColor("RANDOM").setDescription(`
\`${client.ayarlar.prefix[0]}tag\`
\`${client.ayarlar.prefix[0]}link\`
\`${client.ayarlar.prefix[0]}afk [sebep]\`
\`${client.ayarlar.prefix[0]}alarm [süre/sebep]\`
\`${client.ayarlar.prefix[0]}bilgi @etiket\`
\`${client.ayarlar.prefix[0]}booster [nickname]\`
\`${client.ayarlar.prefix[0]}izinliçek @etiket\`
\`${client.ayarlar.prefix[0]}izinligit @etiket\`

`).setAuthor("Genel Komutlar")


let özelkomut = new MessageEmbed().setColor("RANDOM").setDescription(`${özelkomutlar}`).setAuthor("Özel Komutlar")

   const sahip =  new disbut.MessageButton().setID("sahip").setLabel("Bot Yapımcısı").setStyle("red");
   const yönetici =  new disbut.MessageButton().setID("yönetici").setLabel("Yönetici Komutları").setStyle("red");
   const yetkili =  new disbut.MessageButton().setID("yetkili").setLabel("Yetkili Komutları").setStyle("red");
   const stat =  new disbut.MessageButton().setID("stat").setLabel("Moderasyon/Stat Komutları").setStyle("red");
   const genel =  new disbut.MessageButton().setID("genel").setLabel("Genel Komutlar").setStyle("red");

   const özelkomuts =  new disbut.MessageButton().setID("özelkomut").setLabel("Özel Komutlar").setStyle("red");

   
   let msj = await message.channel.send(`**${message.guild.name}**, sunucusunun bot komutlarını görüntülemek için butonlara tıklayabilirsiniz!`, {buttons: [yönetici,yetkili,stat,genel,özelkomuts]});
   let filter = (btn) => btn.clicker.id === message.author.id;
   let collector = msj.createButtonCollector(filter, {time: 1000*60*60*24});

   

   collector.on("collect", async (button) => {
       if (button.id === "sahip") {
  

           await button.reply.send(embed);
       }
       if (button.id === "yönetici") {
  
        await button.reply.send(embed2);
    }

    if (button.id === "yetkili") {
  
      await button.reply.send(embed3);
  }
  
  if (button.id === "stat") {
  
    await button.reply.send(embed4);
}
if (button.id === "genel") {
  
  await button.reply.send(embed6);
}
  if (button.id === "özelkomut") {
  
    await button.reply.send(özelkomut);
}
   })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım']
};

exports.help = {
  name: 'help',
  description: "Sunucuda komut denemeye yarar",
  usage: 'eval <kod>',
  kategori: "Bot Yapımcısı"
};

