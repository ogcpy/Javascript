import "./styles/main.scss";
import github from "./assets/github-logo.png";
import { loadScreen } from "./modules/loadScreen";
import { createBoard } from "./modules/board";
import { placeShips } from "./modules/placeShips";

document.addEventListener("DOMContentLoaded", () => {
    const githubLogo = document.getElementById("github");
    githubLogo.src = github;

    const { npcBtn, twoPlayerBtn } = loadScreen(); 

    npcBtn.addEventListener("click", () => {
        startGame("npc");
    });

    twoPlayerBtn.addEventListener("click", () => {
        startGame("twoPlayer");
    });
});

function startGame(mode) {
    createBoard();
    placeShips();  
}
