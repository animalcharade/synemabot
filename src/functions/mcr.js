module.exports = function mcr() {
  let songPosition = 0;

  const lyrics = ['WHEN I WAS...', 'A YOUNG BOY...', 'MY FATHER...', 'TOOK ME INTO THE CITY...', 'TO SEE A MARCHING BAND...'];


  return async function mcrHandler(client, command) {
    if (command.username.toLowerCase() === 'tsimants') {
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
