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

// We're gonna need the thing that imports lyrics from text files, plz
const lyricsImporter = require('../lyrics/lyricsImporter');

module.exports = function songLyrics(pathToLyrics) {
  // Keep track of where we are in the song
  let songPosition = 0;

  // Import lyrics for the specified song
  const lyrics = lyricsImporter(pathToLyrics);

  return async function songLyricHandler(client, command) {
    await client.chat.say(command.channel, lyrics[songPosition]);
    // If we haven't reached the end of the lyrics array, move to the next
    if (songPosition < lyrics.length - 1) {
      songPosition += 1;
    } else {
      // But if we have reached the end of the lyrics array, go back to the beginning
      songPosition = 0;
    }
  };
};
