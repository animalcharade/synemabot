module.exports = function say(message) {
  if (!message) {
    throw new Error('No message!');
  }
  return function sayHandler(client, command) {
    client.chat.say(command.channel, '/me ' + message);
  };
};
