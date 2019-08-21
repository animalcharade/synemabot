/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
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

const fs = require('fs');
const path = require('path');

const functions = {};

const dirPath = path.join(__dirname, 'functions');

fs.readdirSync(dirPath).forEach((file) => {
  // Is this file a test file?
  if (file.includes('.test.js')) {
    return;
  }

  // Get the name of the file, sans extension
  const command = file.substr(0, file.length - 3);

  // Add the name of the file to our commands object
  functions[command] = require(path.join(dirPath, command));
});

module.exports = functions;
