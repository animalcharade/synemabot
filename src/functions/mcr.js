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

const falgsc = require('./falgsc');
const lyricsImporter = require('../lyrics/lyricsImporter');

const lyrics = lyricsImporter('./src/lyrics/mcrLyrics.txt');

module.exports = function mcr() {
  let songPosition = 0;

  return async function mcrHandler(client, command) {
    // If Tsimants uses the command, but the luxury gay space communism isn't fully automated, send a LASIK link instead!
    if (command.username.toLowerCase() === 'tsimants' && falgsc.isFullyAutomated() === false) {
      await client.chat.say(command.channel, 'https://www.youtube.com/watch?v=0f03ZKjtuKM');
      songPosition = 0;
    } else {
      await client.chat.say(command.channel, lyrics[songPosition]);
      if (songPosition < lyrics.length - 1) {
        songPosition += 1;
      } else {
        songPosition = 0;
      }
    }
  };
};
