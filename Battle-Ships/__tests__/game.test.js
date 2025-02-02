const Game = require('../src/game');
const Player = require('../src/player');
const Ship = require('../src/ship');

test('players take turns', () => {
  const player1 = new Player('Player 1');
  const player2 = new Player('Player 2');
  const game = new Game(player1, player2);

  expect(game.currentPlayer).toBe(player1);
  game.nextTurn();
  expect(game.currentPlayer).toBe(player2);
});

test('game over when all ships are sunk', () => {
  const player1 = new Player('Player 1');
  const player2 = new Player('Player 2');
  const game = new Game(player1, player2);
  const ship = new Ship(3);
  player1.gameboard.placeShip(ship, 0, 0);

  ship.hit();
  ship.hit();
  ship.hit();

  const result = game.checkGameOver();
  expect(result).toBe('Player 1 wins!');
});
