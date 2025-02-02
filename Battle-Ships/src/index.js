import './styles/main.scss'
import Game from './game';

const game = new Game();
game.startNewGame();

const player1Board = document.getElementById('player1Board');
const player2Board = document.getElementById('player2Board');

function createBoard(player, boardElement) {
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.x = x;
      cell.dataset.y = y;
      cell.addEventListener('click', (event) => handleCellClick(event, player));
      boardElement.appendChild(cell);
    }
  }
}

function handleCellClick(event, player) {
  const x = event.target.dataset.x;
  const y = event.target.dataset.y;
  game.playTurn(Number(x), Number(y));

  if (game.currentPlayer.isComputer) {
    game.computerTurn();
  }
}

createBoard(game.player1, player1Board);
createBoard(game.player2, player2Board);

document.getElementById('newGameBtn').addEventListener('click', () => {
  game.startNewGame();
  player1Board.innerHTML = '';
  player2Board.innerHTML = '';
  createBoard(game.player1, player1Board);
  createBoard(game.player2, player2Board);
});

