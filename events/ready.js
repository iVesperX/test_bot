exports.run = (client => {
  console.log('Ready.');

  client.user.setPresence({
    game: { name: 'u 👀', type: 'WATCHING' },
    status: 'online'
  });
});