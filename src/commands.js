const functions = require('./functions');

const MINUTE = 60000;

const commands = {
  lol: functions.say('lol'),
  rofl: functions.globalCooldown(MINUTE, functions.say('rofl')),
  toddbless(client, command, ...args) {
    const blessingTarget = args.join(' ');
    let endOfBlessing = '';
    if (blessingTarget) {
      endOfBlessing = ', ' + blessingTarget;
    }
    client.chat.say(command.channel, '/me Blessings be upon you' + endOfBlessing + '!');
  },
};

module.exports = commands;
