module.exports = function say(message) {
  if (!message) {
    throw new Error('No message!');
  }
  return async function sayHandler(client, command) {
    await client.chat.say(command.channel, '/me ' + message);
  };
};
