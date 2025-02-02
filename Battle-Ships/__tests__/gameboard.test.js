const Ship = require('../src/ship');
const Gameboard = require('../src/gameboard');

test('place a ship on the gameboard', () => {
  const gameboard = new Gameboard();
  const ship = new Ship(3);
  gameboard.placeShip(ship, 0, 0);
  expect(gameboard.ships.length).toBe(1);
});

test('receive an attack that hits a ship', () => {
  const gameboard = new Gameboard();
  const ship = new Ship(3);
  gameboard.placeShip(ship, 0, 0);
  const result = gameboard.receiveAttack(0, 0);
  expect(result).toBe('hit');
  expect(ship.hits).toBe(1);
});

test('receive an attack that misses', () => {
  const gameboard = new Gameboard();
  const ship = new Ship(3);
  gameboard.placeShip(ship, 0, 0);
  const result = gameboard.receiveAttack(1, 1);
  expect(result).toBe('miss');
  expect(gameboard.missedAttacks.length).toBe(1);
});

test('check if all ships are sunk', () => {
  const gameboard = new Gameboard();
  const ship = new Ship(3);
  gameboard.placeShip(ship, 0, 0);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(gameboard.allShipsSunk()).toBe(true);
});
