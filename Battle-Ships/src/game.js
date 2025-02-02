import Ship from './ship';
import Gameboard from './gameboard';
import Player from './player';

class Game {
  constructor() {
    this.player1 = new Player("Player 1");
    this.player2 = new Player("Player 2", true); // Computer player
    this.currentPlayer = this.player1;
  }

  startGame() {
    // Place ships for both players (you can adjust placement logic)
    this.player1.gameboard.placeShip(new Ship(4), 1, 1, 'horizontal');
    this.player1.gameboard.placeShip(new Ship(3), 3, 1, 'vertical');
    
    this.player2.gameboard.placeShip(new Ship(4), 5, 5, 'horizontal');
    this.player2.gameboard.placeShip(new Ship(3), 7, 5, 'vertical');
  }

  switchPlayer() {
    this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
  }

  playTurn(x, y) {
    if (this.currentPlayer.takeTurn(x, y)) {
      alert('Hit!');
    } else {
      alert('Miss!');
    }
    this.switchPlayer();

    if (this.player1.gameboard.allShipsSunk()) {
      alert('Player 2 wins!');
    } else if (this.player2.gameboard.allShipsSunk()) {
      alert('Player 1 wins!');
    }
  }

  computerTurn() {
    let x, y;
    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    } while (this.player1.gameboard.attacks[x][y] !== null); // Avoid repeating attacks

    this.playTurn(x, y);
  }

  startNewGame() {
    this.startGame();
    this.switchPlayer();
  }
}

export default Game;
