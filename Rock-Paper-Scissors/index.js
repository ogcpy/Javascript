// Setting up the constants needed for the game

const choices = ["rock", "paper", "scissors"];
//three diff choices for user
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
// getting the element from html
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const npcScoreDisplay = document.getElementById("npcScoreDisplay")
// setting up function to play game
let playerScore = 0;
let npcScore = 0;

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE"
    }

//first check to see if player and computer chose the same

    else{
//examine value againts matching cases 
        switch(playerChoice){
            case "rock":
            //do these two match?
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
            // if so then return you win if not you lose
                break;
            case "paper":
            //same as above for the other two choices
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }
    //displaying choices from npc and user together
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `NPC: ${computerChoice}`;
    //then displaying result
    resultDisplay.textContent = result;
    //removes colours or previous styling for each round
    resultDisplay.classList.remove("greenText", "redText"); 

    //chnage text colour depending on result
    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            npcScore++
            npcScoreDisplay.textContent = npcScore;
            break;
    }
}