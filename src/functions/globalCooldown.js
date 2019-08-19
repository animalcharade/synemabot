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

module.exports = function globalCooldown(cooldown, handler) {
  let timeLastUsed = 0;
  return async (...args) => {
    if (Date.now() - timeLastUsed < cooldown) {
      return;
    }
    // TODO: Fix this to prevent multiple commands from getting through in the event
    // that it gets called twice in quick succession, wherein the handler might take
    // a while to run before setting the timeLastUsed variable
    // See also: userCooldown
    await handler(...args);
    timeLastUsed = Date.now();
  };
};
