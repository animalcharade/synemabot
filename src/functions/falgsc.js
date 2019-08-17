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
