import { startGame } from "./game";

export function placeShips() {
    const content = document.getElementById('content');
    const playerBoard = document.getElementById("playerBoard");
    const enemyBoard = document.getElementById("enemyBoard");

    const shipData = [
      { name: "Destroyer", size: 2 },
      { name: "Submarine", size: 3 },
      { name: "Cruiser", size: 3 },
      { name: "Battleship", size: 4 },
      { name: "Carrier", size: 5 }
    ];

    const shipContainer = document.createElement("div");
    shipContainer.id = "shipContainer";
    const shipElements = [];
    const placedShips = new Set();

    shipData.forEach((ship, index) => {
      const shipWrapper = document.createElement("div");
      shipWrapper.classList.add("shipWrapper");
      const shipElement = document.createElement("div");
      shipElement.classList.add("ship");
      shipElement.dataset.size = ship.size;
      shipElement.dataset.shipIndex = index;
      shipElement.draggable = true;
      shipElement.innerText = ship.name;
      shipElement.style.width = `${ship.size * 40}px`;
      const rotateBtn = document.createElement("button");
      rotateBtn.innerText = "→";
      rotateBtn.classList.add("rotateBtn");
      rotateBtn.addEventListener("click", () => {
        shipElement.classList.toggle("rotated");
      });
      shipWrapper.appendChild(shipElement);
      shipWrapper.appendChild(rotateBtn);
      shipContainer.appendChild(shipWrapper);
      shipElements.push(shipElement);
    });

    content.appendChild(shipContainer);
    const cells = playerBoard.querySelectorAll(".cell");

    shipElements.forEach((shipElement) => {
      shipElement.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("shipSize", e.target.dataset.size);
        e.dataTransfer.setData("shipIndex", e.target.dataset.shipIndex);
        e.dataTransfer.setData("rotated", e.target.classList.contains("rotated"));
      });
    });

    cells.forEach((cell) => {
      cell.addEventListener("dragover", (e) => {
        e.preventDefault();
      });

      cell.addEventListener("drop", (e) => {
        e.preventDefault();
        const shipSize = parseInt(e.dataTransfer.getData("shipSize"));
        const rotated = e.dataTransfer.getData("rotated") === "true";
        const cellIndex = parseInt(e.target.dataset.index);
        const shipIndex = e.dataTransfer.getData("shipIndex");

        const shipName = shipData[shipIndex].name;

        if (placedShips.has(shipName)) {
          const alertPlayer = document.getElementById('alertPlayer')
        alertPlayer.innerText = `${shipName} is already placed!`;
          return;
        }

        if (canPlaceShip(playerBoard, cellIndex, shipSize, rotated)) {
          for (let i = 0; i < shipSize; i++) {
            const index = rotated ? cellIndex + i * 10 : cellIndex + i;
            const dropCell = playerBoard.querySelector(`[data-index="${index}"]`);
            dropCell.classList.add("occupied");
          }

          placedShips.add(shipName);

          if (placedShips.size === shipData.length) {
            startGame();
          }
        }
      });
    });

    function placeComputerShips() {
      const cells = Array.from(enemyBoard.querySelectorAll(".cell"));
      const placedShips = new Set();

      shipData.forEach((ship) => {
          let placed = false;

          while (!placed) {
              const randomCellIndex = Math.floor(Math.random() * cells.length);
              const cell = cells[randomCellIndex];
              const rotated = Math.random() > 0.5;

              if (canPlaceShip(enemyBoard, parseInt(cell.dataset.index), ship.size, rotated)) {
                  for (let i = 0; i < ship.size; i++) {
                      const index = rotated ? parseInt(cell.dataset.index) + i * 10 : parseInt(cell.dataset.index) + i;
                      const dropCell = enemyBoard.querySelector(`[data-index="${index}"]`);
                      dropCell.classList.add("occupied");
                      dropCell.classList.add("hidden");
                  }

                  placedShips.add(ship.name);
                  placed = true;
              }
          }
      });
    }

    placeComputerShips();
}

function canPlaceShip(board, index, size, rotated) {
    if (rotated) {
        const startRow = Math.floor(index / 10);
        for (let i = 0; i < size; i++) {
            const cell = board.querySelector(`[data-index="${index + i * 10}"]`);
            if (!cell) return false;
            const cellRow = Math.floor((index + i * 10) / 10);
            if (cellRow !== startRow + i) return false;
            if (cell.classList.contains("occupied")) return false;
        }
    } else {
        const startRow = Math.floor(index / 10);
        for (let i = 0; i < size; i++) {
            const cell = board.querySelector(`[data-index="${index + i}"]`);
            if (!cell) return false;
            const cellRow = Math.floor((index + i) / 10);
            if (cellRow !== startRow) return false;
            if (cell.classList.contains("occupied")) return false;
        }
    }
    return true;
}
