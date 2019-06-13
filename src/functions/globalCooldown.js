module.exports = function globalCooldown(cooldown, handler) {
  let timeLastUsed = 0;
  return (client, command) => {
    if (Date.now() - timeLastUsed < cooldown) {
      return;
    }
    handler(client, command);
    timeLastUsed = Date.now();
  };
};
