const Discord = require('discord.js');

const config = require('../config.js');

module.exports = async(client) => {
  const msgArray = [
    "🔔 SimpleYiğit",
    "👏 Gelişmiş Discord Botu"
  ];
  
  setInterval(() => {
    const rastgeleOyun = Math.floor(Math.random() * msgArray.length);
    client.user.setActivity(`${msgArray[rastgeleOyun]}`, { type: 'STREAMING' ,  url: 'https://www.twitch.tv/.' })
  }, 5000);
  console.log('Bot ' + client.user.tag + ' Kullanıcı Adıyla Giriş Yaptı!');
}