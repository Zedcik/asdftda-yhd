const {
    MessageEmbed,
    Client,
    Message
  } = require("discord.js");
  const Discord = require('discord.js');
  const disbut = require("discord-buttons");
  const client = global.client;
  /**
   * 
   * @param {Client} client 
   * @param {Message} message 
   * @param {Array<String>} args 
   * @param {Boolean} durum 
   * @param {Boolean} kanal 
   * @returns
   */
  
  const burclar = {
    "968614861833658438": "993193530535182386", 
    "968614860789276744": "993193532812697746", 
    "968614861896572938": "993193536080056440", 
    "968614861598756914": "993193538881859608", 
    "968614859908452362": "993193542182768730", 
    "968614860596318250": "993193545383018516", 
    "968614862341161151": "993193548235161720", 
    "968614858725662731": "993193551150190692", 
    "968614862328574023": "993193554136535120", 
    "968614862123061299": "993193557047390238", 
    "968614861930131456": "993193560151162911", 
    "968614860210466858": "993193563464667226"  
    
  };
  
  const renkler = {
    "968614859476455474": "993189844580835359", 
    "968614860873170945": "993189792110088364", 
    "968614859946229900": "993189306199965796", 
    "968614861061881857": "993189306627792997", 
    "968614860659241030": "993189307294695524", 
    "968614861611339866": "993189307781234818", 
    "968614860449513532": "993189308309713017" 
    };

    const etkinlikler = {
      "🍼": "928298023874854983", 
      "🧛‍♂️": "928298025477079091",  
      "💺": "928298026613747713" 
    }

  
  const digerler = {
    "968614860722163792": "993191716003786894", 
    "968614860839591997": "993191722932764782" 
  }; // iliski 
// senin ananı sikerim köfte bağırma mal amk 
  const oyunlar = {
    "938763446613319731":"940433248373313546", 
    "635187911050133535":"940435728272334888", 
    "895029377170014259":"940436095412359230", 
    "635186598417399849":"940436537034833920", 
    "722574472116174888":"940436780027629659", 
    "940351493960265778":"940437241317183518", 
    "936622143670738984":"940437921717186580" 
  };
  exports.run = async (client, message, args, durum, kanal) => {
    if (!message.guild) return;
    let guild = message.guild;
    if (!client.ayarlar.sahip.some(x => x === message.author.id)) return
  
    const burcPush = [];
    const oyunPush = [];
    const renkPush = [];
    const digerPush = [];
    const etkinlikPush = [];
    const emoji = (name) => client.emojis.cache.find(x => x.name === name);
  
  
    for (const burc in burclar) {
      let sonuc = burclar[burc];
      let table = new disbut.MessageMenuOption()
      .setLabel(message.guild.roles.cache.get(sonuc) ? message.guild.roles.cache.get(sonuc).name : sonuc)
      .setEmoji(emoji(burc) ? emoji(burc).id : burc)
        .setValue(sonuc)
   burcPush.push(table);
    };
    let kaldırburc = new disbut.MessageMenuOption()
    .setLabel("Kaldır")
    .setEmoji("888881676703399986")
    .setValue("kaldır")
    let burc = new disbut.MessageMenu()
      burc.setID("burc")
      burc.setPlaceholder(`Burç rollerini seçmek için tıkla!`)
      burc.setMaxValues(1)
      burc.setMinValues(1)
      burc.addOptions(burcPush,kaldırburc)
  

      for (const etkinlik in etkinlikler) {
        let sonuc = etkinlikler[etkinlik];
        let table = new disbut.MessageMenuOption()
        .setLabel(message.guild.roles.cache.get(sonuc) ? message.guild.roles.cache.get(sonuc).name : sonuc)
        .setEmoji(emoji(etkinlik) ? emoji(etkinlik).id : etkinlik)
          .setValue(sonuc)
          etkinlikPush.push(table);
      };
      let kaldıretkinlik = new disbut.MessageMenuOption()
      .setLabel("Kaldır")
      .setEmoji("888881676703399986")
      .setValue("kaldır")
      let etkinlik = new disbut.MessageMenu()
      etkinlik.setID("etkinlik")
        etkinlik.setPlaceholder(`Etkinlik rollerini seçmek için tıkla!`)
        etkinlik.setMaxValues(3)
        etkinlik.addOptions(etkinlikPush,kaldıretkinlik)
    


    for (const oyun in oyunlar) {
      const sonuc = oyunlar[oyun];
      let table = new disbut.MessageMenuOption()
      .setLabel(message.guild.roles.cache.get(sonuc)?.name)
      .setEmoji(emoji(oyun) ? emoji(oyun).id : oyun)
        .setValue(sonuc)
        .setDescription(`${message.guild.roles.cache.get(sonuc)?.name} rolüne sahip olmak için tıkla!`)
      oyunPush.push(table);
    };
    let kaldıroyun = new disbut.MessageMenuOption()
    .setLabel("Kaldır")
    .setEmoji("888881676703399986")
    .setValue("kaldır")
    let oyun = new disbut.MessageMenu();
    oyun.setID("oyun");
    oyun.setPlaceholder(`Oyun rollerini seçmek için tıkla!`);
    oyun.setMaxValues(7);
    oyun.setMinValues(1);
    oyun.addOptions(oyunPush,kaldıroyun);
  
 for (const renk in renkler) {
      const sonuc = renkler[renk];
      let table = new disbut.MessageMenuOption()
        .setLabel(`Rengine sahip olmak için tıkla!`)
        .setEmoji(emoji(renk) ? emoji(renk).id : renk)
        .setValue(sonuc)
      renkPush.push(table);
    };
    let kaldırrenk = new disbut.MessageMenuOption()
    .setLabel("Kaldır")
    .setEmoji("888881676703399986")
    .setValue("kaldır")
    let renk = new disbut.MessageMenu();
    renk.setID("renk");
    renk.setPlaceholder(`Renk rollerini seçmek için tıkla!`);
    renk.setMaxValues(1);
    renk.setMinValues(1);
    renk.addOptions(renkPush,kaldırrenk);
  

  
    for (const diger in digerler) {
      const sonuc = digerler[diger];
      let table = new disbut.MessageMenuOption()
        .setLabel(message.guild.roles.cache.get(sonuc)?.name)
        .setEmoji(emoji(diger) ? emoji(diger).id : diger)
        .setValue(sonuc)
      digerPush.push(table);
    };
    let kaldırdiger = new disbut.MessageMenuOption()
    .setLabel("Kaldır")
    .setEmoji("888881676703399986")
    .setValue("kaldır")
    let diger = new disbut.MessageMenu();
    diger.setID("diger");
    diger.setPlaceholder(`İlişki rolünü seçmek için tıkla!`);
    diger.setMaxValues(1);
    diger.setMinValues(1);
    diger.addOptions(digerPush,kaldırdiger);
  

    if (args[0] === "burc") {
      message.channel.send(`Aşağıdaki menüye tıklayarak burcuna ait olan rolü seçebilirsin!`, burc);
    }
  
  
    if (args[0] === "oyun") {
      message.channel.send(`Aşağıdaki menüye tıklayarak oynadığın oyunların rollerini seçebilirsin!`, oyun);
    }
  
    if (args[0] === "renk") {
      message.channel.send(`Aşağıdaki menüye tıklayarak dilediğin rengi seçebilirsin!`, renk);
    }
  
  
    if (args[0] === "iliski") {
      message.channel.send(`İlişki durumunuzu seçmek için aşağıdaki menüyü kullanabilirsiniz!`, diger);
    }

    if (args[0] === "etkinlik") {
      message.channel.send(`Etkinlik oyun rollerini seçmek için aşağıdaki menüyü kullanabilirsiniz!`, etkinlik);
    }
  

  };
  
  client.on("clickMenu", async (menu) => {
    if (menu.id == "burc") {
        await menu.reply.think(true);
        await menu.reply.edit("Rollerin güncellendi!");
        let add = [];
        let remove = [];
        let allRemove = [];
        let roller = burclar;
        for (const rol in roller) {
          let sonuc = roller[rol];
          allRemove.push(sonuc);
          if (menu.values.includes(sonuc)) {
          await menu.reply.edit(`Başarılı bir şekilde <@&${sonuc}> rolü üzerinize eklendi!`);
            add.push(sonuc);
          } else {
            remove.push(sonuc);
          };
        };
        if (!menu.values.some(value => value === "allDelete")) {
          if (remove.length > 0) {
            await menu.clicker.member.roles.remove(remove);
    
          };
          await menu.clicker.member.roles.add(add);
        
  
        } else {
          await menu.clicker.member.roles.remove(allRemove);
         
  
        };
        };

  
    if (menu.id == "oyun") {
      await menu.reply.think(true);
      await menu.reply.edit("Rollerin güncellendi!");
      let add = [];
      let remove = [];
      let allRemove = [];
      let roller = oyunlar;
      for (const rol in roller) {
        let sonuc = roller[rol];
        allRemove.push(sonuc);
        if (menu.values.includes(sonuc)) {
            
          await menu.reply.edit(`Başarılı bir şekilde <@&${sonuc}> rolü üzerinize eklendi!`);
          add.push(sonuc);
        } else {
          remove.push(sonuc);
        };
      };
      if (!menu.values.some(value => value === "allDelete")) {
        if (remove.length > 0) {
          await menu.clicker.member.roles.remove(remove);
        };
        await menu.clicker.member.roles.add(add);
      } else {
        await menu.clicker.member.roles.remove(allRemove);

      };
    };
  
    if (menu.id == "renk") {
      await menu.reply.think(true);
      if (!menu.clicker.member.roles.cache.get("985125039970082826") && !menu.clicker.member.roles.cache.get("993190235540291775")) return await menu.reply.edit("Booster veya taglı üye olman gerek!");;
      await menu.reply.edit("Rollerin güncellendi!");

      let add = [];
      let remove = [];
      let allRemove = [];
      let roller = renkler;
      for (const rol in roller) {

        let sonuc = roller[rol];  

        allRemove.push(sonuc);
        if (menu.values.includes(sonuc)) {    
          await menu.reply.edit(`Başarılı bir şekilde <@&${sonuc}> rolü üzerinize eklendi!`);

          add.push(sonuc);
        } else {
          remove.push(sonuc);

        };
      };
      if (!menu.values.some(value => value === "allDelete")) {
        if (remove.length > 0) {
          await menu.clicker.member.roles.remove(remove);
        };
        await menu.clicker.member.roles.add(add);
      } else {
        await menu.clicker.member.roles.remove(allRemove);

      };
    };
    if (menu.id == "diger") {
      await menu.reply.think(true);
      await menu.reply.edit("Rollerin güncellendi!");
      let add = [];
      let remove = [];
      let allRemove = [];
      let roller = digerler;
      for (const rol in roller) {
        let sonuc = digerler[rol];
        allRemove.push(sonuc);
        if (menu.values.includes(sonuc)) {
            
          await menu.reply.edit(`Başarılı bir şekilde <@&${sonuc}> rolü üzerinize eklendi!`);
          add.push(sonuc);
        } else {
          remove.push(sonuc);
        };
      };
      if (!menu.values.some(value => value === "allDelete")) {
        if (remove.length > 0) {
          await menu.clicker.member.roles.remove(remove);
         

        };
        await menu.clicker.member.roles.add(add);
      } else {
        await menu.clicker.member.roles.remove(allRemove);
      };
    };

   
    if (menu.id == "etkinlik") {
      await menu.reply.think(true);
      await menu.reply.edit("Rollerin güncellendi!");
      let add = [];
      let remove = [];
      let allRemove = [];
      let roller = etkinlikler;
      for (const rol in roller) {
        let sonuc = etkinlikler[rol];
        allRemove.push(sonuc);
        if (menu.values.includes(sonuc)) {
            
          await menu.reply.edit(`Başarılı bir şekilde <@&${sonuc}> rolü üzerinize eklendi!`);
          add.push(sonuc);
        } else {
          remove.push(sonuc);
        };
      };
      if (!menu.values.some(value => value === "allDelete")) {
        if (remove.length > 0) {
          await menu.clicker.member.roles.remove(remove);
         

        };
        await menu.clicker.member.roles.add(add);
      } else {
        await menu.clicker.member.roles.remove(allRemove);
      };
    };

  });
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['menü-kurr'],
    permLevel: 4
  };
  
  exports.help = {
    name: 'menü-kur',
    description: "Menülü rol seçme sistemi kurar.",
    usage: 'menü-kur',
    kategori: "Bot Yapımcısı"
  };