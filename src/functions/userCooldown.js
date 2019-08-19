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

const timeFormatter = require('../timeFormatter');

module.exports = function userCooldown(cooldown, handler) {
  const users = {};
  return async (client, command, ...args) => {
    // Get the username of the person attempting to use the command
    const { username } = command;

    // Is this username missing from our list?
    if (!users[username]) {
      users[username] = 0;
    }

    // Has this username used this command more recently than our cooldown?
    const cooldownRemaining = cooldown - (Date.now() - users[username]);
    console.log(users);
    if (cooldownRemaining > 0) {
      // Notify the user via whisper that they cannot use this command yet.
      await client.chat.whisper(command.username, 'Sorry, ' + command + ' has ' + timeFormatter(cooldownRemaining) + ' left in its cooldown!');
      return;
    }
    // TODO: Fix this to prevent multiple commands from getting through in the event
    // that it gets called twice in quick succession, wherein the handler might take
    // a while to run before setting the timeLastUsed variable
    // See also: globalCooldown
    await handler(client, command, ...args);

    // Set the username's last used time to now
    users[username] = Date.now();
  };
};
