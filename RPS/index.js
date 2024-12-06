// Ask player to pick 
// make cpu have a random pick 
// see who won
// if they play again?

// Require the prompt-sync package for user input
const prompt = require("prompt-sync")();


const choices = ["rock", "paper", "scissors"]

let playerScore = 0;
let npcScore = 0;

function playGame() {

    var playerChoice = prompt("Pick rock paper or scissors...")
    const computerChoice = choices[Math.floor(Math.random() * 3)]
   
}

playGame()
