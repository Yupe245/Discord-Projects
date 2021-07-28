const Discord = require('discord.js');

const ai = require('codare.ai')

const config = require('./config.js');
const client = new Discord.Client();

client.on('ready', () => console.log('Bot ' + client.user.tag + ' Kullanıcı Adıyla Aktif!'));

client.on('message', (message) => {
    if (message.author.bot) return;
    if (!message.guild) return;
    if (message.channel.id !== config.channelID) return;
    ai.ayarla(message.author.username);
    ai.sor(message.content).then(res => message.channel.send(res));
});

client.login(config.Token);