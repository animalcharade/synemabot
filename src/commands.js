const functions = require('./functions');

const MINUTE = 60000;

const commands = {
  lol: functions.say('lol'),
  rofl: functions.globalCooldown(MINUTE, functions.say('rofl')),
};

module.exports = commands;
