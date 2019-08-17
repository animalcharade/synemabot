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
