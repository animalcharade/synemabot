const fs = require('fs');

module.exports = function lyricsImporter(path) {
  let file;
  // Try to import the contents of the specified file
  try {
    file = fs.readFileSync(path, 'utf8');
  } catch (err) {
    console.log('LyricsImporter is sad! No such file: ' + path);
  }
  // Split the file into an array by newlines
  let lyrics = file.split('\n');
  // Remove empty items
  lyrics = lyrics.filter(x => x);
  // Make everything uppercase
  lyrics = lyrics.map(x => x.toUpperCase());
  // Strip unnecessary puntuation
  lyrics = lyrics.map(x => x.replace(/[?".,!()]/g, ''));
  // Add ... to each item
  lyrics = lyrics.map(x => x + '...');
  // Return the resulting array
  return lyrics;
};
