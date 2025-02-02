import Gameboard from './gameboard';

class Player {
  constructor(name, isComputer = false) {
    this.name = name;
    this.gameboard = new Gameboard();
    this.isComputer = isComputer;
  }

  takeTurn(x, y) {
    return this.gameboard.receiveAttack(x, y);
  }
}

export default Player;
