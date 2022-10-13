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

module.exports = function lyricsImporter(path) {
  let file;
  // Try to import the contents of the specified file
  try {
    file = fs.readFileSync(path, 'utf8');
  } catch (err) {
    console.log('LyricsImporter is sad! No such file: ' + path);
    throw err;
  }
  // Split the file into an array by newlines
  let lyrics = file.split('\n');
  // Remove empty items
  lyrics = lyrics.filter((x) => x);
  // Make everything uppercase
  lyrics = lyrics.map((x) => x.toUpperCase());
  // Strip unnecessary puntuation
  lyrics = lyrics.map((x) => x.replace(/[?".,!()]/g, ''));
  // Add ... to each item
  lyrics = lyrics.map((x) => x + '...');
  // Return the resulting array
  return lyrics;
};
