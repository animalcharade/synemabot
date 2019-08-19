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

let automatedness = 0;

// If automatedness is above zero, move the value toward zero when this function is called
function decay() {
  if (automatedness > 0) {
    automatedness -= 1;
  }
}
// Every two minutes, call decay()
setInterval(decay, 1000 * 60 * 2);

// Is the luxury gay space communism fully automated?
function isFullyAutomated() {
  if (automatedness >= 100) {
    return true;
  }
  return false;
}

module.exports = {
  // When the falgsc command is used...
  async handler(client, command) {
    // If we've not yet made it too 100 or above, add 10
    if (automatedness < 100) {
      automatedness += 10;
    }
    // Let's let the people know how automated the luxury gay space communism is!
    let output;
    if (isFullyAutomated() === false) {
      output = '/me The luxury gay space communism is ' + automatedness + '% automated.';
    } else {
      output = '/me The luxury gay space communism is FULLY AUTOMATED.';
    }
    await client.chat.say(command.channel, output);
  },
  // Make the isFullyAutomated() function available to other functions
  isFullyAutomated,
};
