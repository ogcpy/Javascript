import './styles/main.scss'
import github from './assets/github-logo.png'

const githubImg = document.getElementById('github')
githubImg.src = github

import { loadHomePage } from './home.js'
import { loadAboutPage } from './about.js';
import { loadMenuPage } from './menu.js';

document.addEventListener('DOMContentLoaded', () => {
    loadHomePage()

    const homeButton = document.getElementById('homeBtn');
    const aboutButton = document.getElementById('aboutBtn');
    const menuButton = document.getElementById('menuBtn');
    homeButton.addEventListener('click', loadHomePage)
    aboutButton.addEventListener('click', loadAboutPage);
    menuButton.addEventListener('click', loadMenuPage);
});
