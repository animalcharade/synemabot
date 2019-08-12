const timeFormatter = require('../timeFormatter');

module.exports = function userCooldown(cooldown, handler) {
  const users = {};
  return (client, command, ...args) => {
    // Get the username of the person attempting to use the command
    const { username } = command;

    // Is this username missing from our list?
    if (!users[username]) {
      users[username] = 0;
    }

    // Has this username used this command more recently than our cooldown?
    const cooldownRemaining = Date.now() - users[username];
    if (cooldownRemaining < cooldown) {
      // Notify the user via whisper that they cannot use this command yet.
      client.chat.whisper(command.username, 'Sorry, ' + command + ' has ' + timeFormatter(cooldownRemaining) + ' left in its cooldown!'); // TODO: Fix the display
      return;
    }
    handler(client, command, ...args);

    // Set the username's last used time to now
    users[username] = Date.now();

    console.log(users);
  };
};
