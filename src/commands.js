const functions = require('./functions');
const timeFormatter = require('./timeFormatter');

const MINUTE = 60000;

const commands = {
  discord: functions.globalCooldown(MINUTE, functions.say('Join the Arandanauts Discord! https://discord.gg/SPHTCyN')),
  donate: functions.globalCooldown(MINUTE, functions.say('https://streamlabs.com/michaelaranda')),
  falgsc: functions.userCooldown(MINUTE * 10, functions.falgsc.handler()),
  kingofpeen: functions.globalCooldown(MINUTE, functions.say('All hail The King Of Peen! Let us rejoice and remember His great coronation! https://www.twitch.tv/michaelaranda/clip/JazzyFantasticCattleShazBotstix')),
  lol: functions.globalCooldown(MINUTE, functions.say('lol')),
  async lurk(client, command) {
    await client.chat.say(command.channel, '/me ' + command.username + ' crawls into the shadows to lurk from afar, eyes shining through the darkness like candles in the night...');
  },
  mcr: functions.userCooldown(MINUTE * 10, functions.mcr()),
  milk: functions.globalCooldown(MINUTE, functions.say('Michael has an unyielding distaste for cow juice. Despite its alleged spice-reducing properties, it will not be permitted in, on, or around Michael\'s mouth.')),
  rofl: functions.globalCooldown(MINUTE, functions.say('rofl')),
  async toddbless(client, command, ...args) {
    const blessingTarget = args.join(' ');
    let endOfBlessing = '';
    if (blessingTarget) {
      endOfBlessing = ', ' + blessingTarget;
    }
    await client.chat.say(command.channel, '/me Blessings be upon you' + endOfBlessing + '!');
  },
  async unlurk(client, command) {
    await client.chat.say(command.channel, '/me ' + command.username + ' emerges from the shadows, squinting against the light, skin pale and waxen...');
  },
  async uptime(client, command) {
    const { stream } = await client.api.get('streams/' + client.streamer.id);
    if (!stream) {
      await client.chat.say(command.channel, '/me The channel is not live.');
      return;
    }
    const { createdAt: streamStartTime } = stream;
    const totalUptime = (Date.now() - Date.parse(streamStartTime));
    await client.chat.say(command.channel, '/me Uptime: ' + timeFormatter(totalUptime) + '.');
  },
};

commands.commands = functions.say(Object.keys(commands).join(', '));

module.exports = commands;
