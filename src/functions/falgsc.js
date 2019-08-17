let automatedness = 0;

module.exports = {
  falgsc() {
    function decay() {
      if (automatedness > 0) {
        automatedness -= 1;
      }
    }

    setInterval(decay, 1000 * 60 * 2);
    return async function falgscHandler(client, command) {
      if (automatedness < 100) {
        automatedness += 10;
      }
      let output;
      if (automatedness < 100) {
        output = '/me The luxury gay space communism is ' + automatedness + '% automated.';
      } else {
        output = '/me The luxury gay space communism is FULLY AUTOMATED.';
      }
      await client.chat.say(command.channel, output);
    };
  },
  isFullyAutomated() {
    if (automatedness >= 100) {
      return true;
    }
    return false;
  },
};
