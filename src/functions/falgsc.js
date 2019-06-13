module.exports = function falgsc() {
  let automatedness = 0;

  function decay() {
    automatedness -= 1;
  }

  setInterval(decay, 1000 * 60 * 10);
  return function falgscHandler(client, command) {
    if (automatedness < 100) {
      automatedness += 10;
    }
    let output;
    if (automatedness < 100) {
      output = '/me The luxury gay space communism is ' + automatedness + '% automated.';
    } else {
      output = '/me The luxury gay space communism is FULLY AUTOMATED.';
    }
    client.chat.say(command.channel, output);
  };
};
