import { loadScreen } from "./loadScreen";

class Game {
  constructor(playerBoard, enemyBoard) {
      this.playerBoard = playerBoard;
      this.enemyBoard = enemyBoard;
      this.turn = 'player';
      this.gameOver = false;
  }

  addAttackEventListeners() {
      const cells = this.enemyBoard.querySelectorAll('.cell');
      cells.forEach((cell) => {
          cell.addEventListener('click', (e) => {
              if (this.turn === 'player' && !this.gameOver) {
                  const targetCell = e.target;
                  this.attack(targetCell);
              }
          });
      });
  }

  start() {
      this.addAttackEventListeners();
  }

  switchTurn() {
      this.turn = this.turn === 'player' ? 'computer' : 'player';
  }

  attack(targetCell) {
      const targetIndex = targetCell.dataset.index;

      if (targetCell.classList.contains('hit') || targetCell.classList.contains('miss')) {
          return;
      }

      if (this.isHit(targetIndex, this.enemyBoard)) {
        const alertPlayer = document.getElementById('alertPlayer')
        alertPlayer.innerText = "HIT"
          targetCell.classList.add('hit');
          this.checkForWin(this.enemyBoard, 'Player');
      } else {
        const alertPlayer = document.getElementById('alertPlayer')
        alertPlayer.innerText = "MISS"
          targetCell.classList.add('miss');
      }

      this.switchTurn();
      this.computerTurn();
  }

  computerTurn() {
      if (this.turn === 'computer' && !this.gameOver) {
          const cells = this.playerBoard.querySelectorAll('.cell');
          const availableCells = Array.from(cells).filter(cell => !cell.classList.contains('hit') && !cell.classList.contains('miss'));
          const randomCell = availableCells[Math.floor(Math.random() * availableCells.length)];

          setTimeout(() => {
              this.attackComputer(randomCell);
          }, 500);
      }
  }

  attackComputer(targetCell) {
      const targetIndex = targetCell.dataset.index;

      if (targetCell.classList.contains('hit') || targetCell.classList.contains('miss')) {
          return;
      }

      if (this.isHit(targetIndex, this.playerBoard)) {
          targetCell.classList.add('hit');
          this.checkForWin(this.playerBoard, 'Computer');
      } else {
          targetCell.classList.add('miss');
      }

      this.switchTurn();
  }

  isHit(targetIndex, board) {
      const cell = board.querySelector(`[data-index="${targetIndex}"]`);
      return cell && cell.classList.contains('occupied');
      
  }

  checkForWin(board, player) {
      const ships = Array.from(board.querySelectorAll('.cell'));
      const allSunk = ships.every(cell => {
          if (cell.classList.contains('occupied')) {
              return cell.classList.contains('hit');
          }
          return true;
      });

      if (allSunk) {
          this.endGame(player);
      }
  }

  endGame(winner) {
      this.gameOver = true;
      const alertPlayer = document.getElementById('alertPlayer')
      alertPlayer.innerText = `${winner} wins! Game Over.`;
      setTimeout(() => {
        window.location.reload();
    }, 5000);
  }
}

export function startGame() {
  const playerBoard = document.getElementById('playerBoard');
  const enemyBoard = document.getElementById('enemyBoard');

  const game = new Game(playerBoard, enemyBoard);
  game.start();
}
