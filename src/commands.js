// Copyright (C) 2019 Synema Studios
//
// This file is part of SynemaBot.
//
// SynemaBot is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// SynemaBot is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with SynemaBot.  If not, see <http://www.gnu.org/licenses/>.

const functions = require('./functions');
const timeFormatter = require('./timeFormatter');

const MINUTE = 60000;

const commands = {
  allstar: functions.userCooldown(MINUTE * 10, functions.songLyrics('./src/lyrics/allstarLyrics.txt')),
  discord: functions.globalCooldown(MINUTE, functions.say('Join the Arandanauts Discord! https://discord.gg/SPHTCyN')),
  donate: functions.globalCooldown(MINUTE, functions.say('https://streamlabs.com/michaelaranda')),
  falgsc: functions.userCooldown(MINUTE * 10, functions.falgsc.handler),
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
