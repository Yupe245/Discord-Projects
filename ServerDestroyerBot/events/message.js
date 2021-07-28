const config = require('../config.js');

module.exports = async(message) => {
  const client = message.client;
  var cmd;
  
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(config.discord.prefix)) return;
  
  let command = message.content.split(' ')[0].slice(config.discord.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  };
};