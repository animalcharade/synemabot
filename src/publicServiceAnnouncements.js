// Copyright (C) 2019 Synema Studios
//
// This file is part of SynemaBot.
//
// SynemaBot is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// SynemaBot is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with SynemaBot.  If not, see <http://www.gnu.org/licenses/>.

const fs = require('fs');

const MINUTE = 1000 * 60;
const MIN_TIMER = 1;

let messageIndex = 0;
let timer = MINUTE * 15;

let messagesFile;
// Try to import the contents of the specified file
try {
  messagesFile = fs.readFileSync('./src/psaMessages.txt', 'utf8');
} catch (err) {
  console.log('The psaMessages file is missing!');
  throw err;
}
// Split the file into an array by newlines
let messages = messagesFile.split('\n');
// Remove empty items
messages = messages.filter((x) => x);

module.exports = {
  run: (client, targetChannel) => {
    async function broadcast() {
      setTimeout(broadcast, timer);
      await client.chat.say(targetChannel, '/me ' + messages[messageIndex]);
      if (messageIndex < messages.length - 1) {
        messageIndex += 1;
      } else {
        messageIndex = 0;
      }
    }

    setTimeout(broadcast, timer);
  },
  setTimer: (newTimer) => {
    if (newTimer >= MIN_TIMER) {
      timer = MINUTE * newTimer;
    }
  },
};
