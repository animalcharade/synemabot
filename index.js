// Requirements
require('dotenv').config();
const TwitchJs = require('twitch-js').default;

const commands = require('./src/commands');

// Twitch login deets
const login = {
  token: process.env.OAUTH_TOKEN,
  username: process.env.BOT_USERNAME,
};
const targetChannel = process.env.CHANNEL_NAME;

console.log(TwitchJs);
const client = new TwitchJs(login);
const { chat } = client;

// When a message comes in...
function onChatHandler(input) {
  console.log(input);

  // Remove leading and trailing whitespace
  const message = input.message.trim();

  // Is the message a command?
  if (message[0] === '!') {
    const commandName = message.substring(1);
    const commandHandler = commands[commandName];
    if (commandHandler) {
      commandHandler(client, input);
    } else {
      console.log('No such command!');
    }
  }
}

chat.on('PRIVMSG', onChatHandler);

// Connect to Twitch
async function connect() {
  await chat.connect();
  console.log('We connected to a thing.');
  await chat.join(targetChannel);
  console.log('We joined a thing.');
}

connect();
