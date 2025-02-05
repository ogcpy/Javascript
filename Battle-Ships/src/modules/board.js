export function createBoard() {
    const content = document.getElementById("content");
    content.innerHTML = ""; 
    const boardContainer = document.createElement("div");
    boardContainer.id = "boardContainer";

    const playerBoard = createGrid("playerBoard", "Player's Board");
    const enemyBoard = createGrid("enemyBoard", "Enemy's Board");

    const alertPlayer = document.createElement("h3")
    alertPlayer.id = "alertPlayer"
    alertPlayer.innerText = "Place your ships"
    
    content.appendChild(alertPlayer)
    boardContainer.appendChild(playerBoard);
    boardContainer.appendChild(enemyBoard);
    content.appendChild(boardContainer);
    
}

function createGrid(id, label) {
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("gridContainer");

    const title = document.createElement("h2");
    title.innerText = label;
    gridContainer.appendChild(title);

    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.id = id;

    for (let i = 0; i < 100; i++) { 
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = i;
        grid.appendChild(cell);
    }

    gridContainer.appendChild(grid);
    return gridContainer;
}
