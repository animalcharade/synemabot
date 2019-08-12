module.exports = function timeFormatter(timeInput) {
  // Convert from milliseconds to seconds
  let time = Math.floor(timeInput / 1000);
  const seconds = time % 60;
  time = Math.floor(time / 60);
  const minutes = time % 60;
  time = Math.floor(time / 60);
  const hours = time;
  let output = seconds + ' seconds';
  if (minutes > 0) {
    output = minutes + ' minutes, ' + output;
  }
  if (hours > 0) {
    output = hours + ' hours, ' + output;
  }
  return output;
};
