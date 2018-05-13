const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  for (let i = 0; i < files.length; i++) {
    let event_file = require(`./events/${file[i]}`);
    let event = file[i].split('.')[0];
    client.on(event, (...args) => event_file.run(client, ...args));
  }
});

client.login(token);