const functions = require('./functions');

const MINUTE = 60000;

const commands = {
  discord: functions.globalCooldown(MINUTE, functions.say('Join the Arandanauts Discord! https://discord.gg/SPHTCyN')),
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
  unlurk(client, command) {
    client.chat.say(command.channel, '/me ' + command.username + ' emerges from the shadows, squinting against the light, skin pale and waxen...');
  },
  async uptime(client, command) {
    const { stream } = await client.api.get('streams/' + client.streamer.id);
    if (!stream) {
      client.chat.say(command.channel, '/me The channel is not live.');
      return;
    }
    const { createdAt: streamStartTime } = stream;
    let totalUptime = Math.floor((Date.now() - Date.parse(streamStartTime)) / 1000);
    const uptimeSeconds = totalUptime % 60;
    totalUptime = Math.floor(totalUptime / 60);
    const uptimeMinutes = totalUptime % 60;
    totalUptime = Math.floor(totalUptime / 60);
    const uptimeHours = totalUptime;
    let output = uptimeSeconds + ' seconds.';
    if (uptimeMinutes > 0) {
      output = uptimeMinutes + ' minutes, ' + output;
    }
    if (uptimeHours > 0) {
      output = uptimeHours + ' hours, ' + output;
    }
    client.chat.say(command.channel, '/me Uptime: ' + output);
  },
};

commands.commands = functions.say(Object.keys(commands).join(', '));

module.exports = commands;
