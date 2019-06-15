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
    if (Date.now() - users[username] < cooldown) {
      return;
    }
    handler(client, command, ...args);

    // Set the username's last used time to now
    users[username] = Date.now();

    console.log(users);
  };
};
