import "./styles/main.scss"
import github from './assets/github-logo.png'
import { loadNav } from './nav'
import { loadProjects } from './projects'

document.addEventListener('DOMContentLoaded', () => {
    const githubImg = document.getElementById('github');
    githubImg.src = github

    loadNav()
    loadProjects()
})