module.exports = function globalCooldown(cooldown, handler) {
  let timeLastUsed = 0;
  return (...args) => {
    if (Date.now() - timeLastUsed < cooldown) {
      return;
    }
    handler(...args);
    timeLastUsed = Date.now();
  };
};
