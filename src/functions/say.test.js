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

const say = require('./say');

describe('say()', () => {
  test('returns a function', () => {
    const returnedSayFunction = say('This is a unit test');
    expect(returnedSayFunction).toBeInstanceOf(Function);
  });

  test('throws an error message', () => {
    expect(() => say().toThrow('No message!'));
  });

  describe('handler', () => {
    test('says \'/me Hello world!\'', async () => {
      const returnedSayFunction = say('Hello world!');
      const client = {
        chat: {
          say: jest.fn(),
        },
      };
      const command = {
        channel: 'targetChannel',
      };
      await expect(returnedSayFunction(client, command)).resolves.toBeUndefined();
      expect(client.chat.say).toHaveBeenCalledWith('targetChannel', '/me Hello world!');
    });
  });
});
