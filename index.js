//  //  //

//  SynemaBot: A bot to provide interactive community engagement on Twitch
//  Copyright (C) 2019  Synema Studios, LLC

//  This program is free software: you can redistribute it and/or modify
//  it under the terms of the GNU General Public License as published by
//  the Free Software Foundation, either version 3 of the License, or
//  (at your option) any later version.

//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU General Public License for more details.

//  You should have received a copy of the GNU General Public License
//  along with this program.  If not, see <https://www.gnu.org/licenses/>.

//  For questions or comments about this program, email hello@synemastudios.com

//  //  //

// Display copyright info on launch
console.log('SynemaBot Copyright (C) 2019  Synema Studios\n'
  + 'This program comes with ABSOLUTELY NO WARRANTY\n'
  + 'This is free software, and you are welcome to redistribute it\n'
  + 'under certain conditions.\n'
  + 'See LICENSE.txt in this program\'s root folder for details.');

// Requirements
require('dotenv').config();
const TwitchJs = require('twitch-js').default;

const commands = require('./src/commands');

// Twitch login deets
const login = {
  clientId: process.env.CLIENT_ID,
  token: process.env.OAUTH_TOKEN,
  username: process.env.BOT_USERNAME,
};
const targetChannel = process.env.CHANNEL_NAME;

console.log(TwitchJs);
const client = new TwitchJs(login);
const { chat } = client;

// When a message comes in...
async function onChatHandler(input) {
  console.log(input);

  // Remove leading and trailing whitespace
  let message = input.message.trim();

  // Is the message an action?
  if (message.startsWith('\u0001ACTION ')) {
    // Then we need to remove the '0001ACTION' text from the beginning of the message
    message = message.substring(8, message.length - 1);
  }

  // Is the message a command?
  if (message[0] === '!') {
    const [commandName, ...args] = message.substring(1).split(' ');
    const commandHandler = commands[commandName];
    if (commandHandler) {
      try {
        await commandHandler(client, input, ...args);
      } catch (err) {
        console.log('commandHandler() made a booboo: ' + err);
      }
    } else {
      console.log('No such command: ' + commandName);
    }
  }
}

chat.on('PRIVMSG', onChatHandler);

// Function for announcing our arrival after successfully connecting to Twitch
async function announceConnection() {
  await client.chat.say(targetChannel, '/me has rebooted, and is ready to rumble! BEEP BOOP');
}

// Connect to Twitch
async function connect() {
  const { users: [user] } = await client.api.get('users', { search: { login: targetChannel } });
  client.streamer = user;
  await chat.connect();
  console.log('We connected to a thing.');
  await chat.join(targetChannel);
  console.log('We joined a thing.');
  await announceConnection();
}

connect();
