const config = require('../config.json');

exports.run = ((client, message) => {
  const c = message.content;
  const args = c.split(' ');
  const command = args.shift().slice(config.prefix.length);
  
  if (c.indexOf(config.prefix) !== 0 || message.author.bot) return;
  if (message.channel.type == 'dm') return;  

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);

  } catch (err) {
    console.log(`Failed to load command: ${command}\n${err.stack}`);

  }
});