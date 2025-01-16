import "./styles/main.scss"

const dropdownContent = document.querySelector('.dropdown-content');
const toggleButton = document.querySelector('.dropdown-toggle');

toggleButton.addEventListener('click', () => {
    dropdownContent.classList.toggle('visible')
});
