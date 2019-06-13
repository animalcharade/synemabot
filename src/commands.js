const functions = require('./functions');

const MINUTE = 60000;

const commands = {
  falgsc: functions.globalCooldown(MINUTE, functions.falgsc()),
  kingofpeen: functions.globalCooldown(MINUTE, functions.say('All hail The King Of Peen! Let us rejoice and remember His great coronation! https://www.twitch.tv/michaelaranda/clip/JazzyFantasticCattleShazBotstix')),
  lol: functions.globalCooldown(MINUTE, functions.say('lol')),
  lurk(client, command) {
    client.chat.say(command.channel, '/me ' + command.username + ' crawls into the shadows to lurk from afar, eyes shining through the darkness like candles in the night...');
  },
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
