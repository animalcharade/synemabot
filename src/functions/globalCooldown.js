module.exports = function globalCooldown(cooldown, handler) {
  let timeLastUsed = 0;
  return async (...args) => {
    if (Date.now() - timeLastUsed < cooldown) {
      return;
    }
    // TODO: Fix this to prevent multiple commands from getting through in the event
    // that it gets called twice in quick succession, wherein the handler might take
    // a while to run before setting the timeLastUsed variable
    await handler(...args);
    timeLastUsed = Date.now();
  };
};
