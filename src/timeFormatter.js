module.exports = function timeFormatter(timeInput) {
  // Convert from milliseconds to seconds
  let time = Math.floor(timeInput / 1000);

  // Parse out the number of leftover seconds for the final display
  const seconds = time % 60;
  // Remove those seconds from our time variable
  time = Math.floor(time / 60);
  // Parse out the number of leftover minutes for the final display
  const minutes = time % 60;
  // Remove those minutes from the final display
  time = Math.floor(time / 60);
  // The remaining time is our number of hours
  const hours = time;

  // Build the output string from the back, starting with the end
  let output = seconds + ' seconds';
  // If we have minutes to display, add them to the front of our string
  if (minutes > 0) {
    output = minutes + ' minutes, ' + output;
  }
  // If we have any hours to display, add them to the front of our string
  if (hours > 0) {
    output = hours + ' hours, ' + output;
  }
  return output;
};
