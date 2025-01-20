import "./styles/main.scss"
import github from './assets/github-logo.png'
import { loadCarousel } from "./carousel";

document.addEventListener('DOMContentLoaded', () => {

    const githubImg = document.getElementById('github')
    githubImg.src = github

    loadCarousel()
});