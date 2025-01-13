let CurrentPlayer = "X"
let state = document.getElementById("status")
let score = document.getElementById("score")
const cells = document.querySelectorAll(".cell");
const restartBtn = document.querySelector("#reset-btn")
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let gameBoard = ["", "", "", "", "", "", "", "", ""]
let currentPlayer = "X"
let running = false 

startGame()

function startGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked))
    restartBtn.addEventListener("click", restartGame)
    state.textContent = `${currentPlayer}'s turn`
    running = true
}

function cellClicked(){
    const cellIndex = this.getAttribute("data-index")

    if(gameBoard[cellIndex] !== "" || !running){
        return
    }
    
    updateCell(this, cellIndex)
    checkWinner()
}

function updateCell(cell, index){
    gameBoard[index] = currentPlayer
    cell.textContent = currentPlayer
}

function changePlayer(){
    currentPlayer = currentPlayer === "X" ? "O" : "X"
    state.textContent = `${currentPlayer}'s turn`
}

function checkWinner(){
    let roundWon = false

    for(let i=0; i<winningConditions.length; i++){
        const winCondition = winningConditions[i]
        let a = gameBoard[winCondition[0]]
        let b = gameBoard[winCondition[1]]
        let c = gameBoard[winCondition[2]]

        if(a == "" || b == "" || c == ""){
            continue
        }
        if(a === b && b === c){
            roundWon = true
            break
        }
    }

    if(roundWon){
        state.textContent = `${currentPlayer} wins`
        running = false
        return
    }
    else if(!gameBoard.includes("")){
        state.textContent = "It's a tie"
        running = false
        return
    }
    else{
        changePlayer()
    }
}

function restartGame(){
    currentPlayer = "X"
    gameBoard = ["", "", "", "", "", "", "", "", ""]
    state.textContent = `${currentPlayer}'s turn`
    cells.forEach(cell => cell.textContent = "")
    running = true
}
