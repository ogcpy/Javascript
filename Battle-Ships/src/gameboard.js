import Ship from './ship';

class Gameboard {
  constructor() {
    this.ships = [];
    this.attacks = Array(10).fill().map(() => Array(10).fill(null));
  }

  placeShip(ship, x, y, direction) {
    this.ships.push({ ship, x, y, direction });
  }

  receiveAttack(x, y) {
    for (let ship of this.ships) {
      if (this.isShipAt(x, y, ship)) {
        ship.ship.hit();
        this.attacks[x][y] = 'hit';
        return true;
      }
    }
    this.attacks[x][y] = 'miss';
    return false;
  }

  isShipAt(x, y, ship) {
    if (ship.direction === 'horizontal') {
      return x >= ship.x && x < ship.x + ship.ship.length && y === ship.y;
    } else {
      return y >= ship.y && y < ship.y + ship.ship.length && x === ship.x;
    }
  }

  allShipsSunk() {
    return this.ships.every(ship => ship.ship.isSunk());
  }
}

export default Gameboard;

