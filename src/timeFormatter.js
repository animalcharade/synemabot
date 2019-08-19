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
