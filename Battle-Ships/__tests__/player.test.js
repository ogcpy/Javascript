const Player = require('../src/player');
const Gameboard = require('../src/gameboard');
const Ship = require('../src/ship');

test('create a player with a gameboard', () => {
  const player = new Player('Player 1');
  expect(player.name).toBe('Player 1');
  expect(player.gameboard).toBeInstanceOf(Gameboard);
});

test('a player can attack another player\'s gameboard', () => {
  const player1 = new Player('Player 1');
  const player2 = new Player('Player 2');
  const ship = new Ship(3);
  player2.gameboard.placeShip(ship, 1, 1);
  const result = player1.attack(1, 1, player2);
  expect(result).toBe('hit');
  expect(ship.hits).toBe(1);
});
