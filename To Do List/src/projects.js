import { createCard } from "./card";

export function loadProjects() {
    const content = document.getElementById('content');

    const projects = document.createElement('div');
    projects.id ='projects';
    content.appendChild(projects)

    const todos = JSON.parse(localStorage.getItem('todos')) || [];

    if (todos.length === 0) {
        const defaultCards = [
            {
                title: "Complete Project",
                description: "Finish the To-Do list project by the end of the week.",
                dueDate: "2023-10-15",
                priority: "high",
            },
            {
                title: "Buy Groceries",
                description: "Milk, Bread, Eggs, and Vegetables.",
                dueDate: "2023-10-10",
                priority: "medium",
            },
            {
                title: "Call Mom",
                description: "Wish her a happy birthday.",
                dueDate: "2023-10-12",
                priority: "low",
            },
        ];

        defaultCards.forEach(cardData => {
            saveToLocalStorage(cardData); 
            const card = createCard(cardData);
            projects.appendChild(card);
        });
    } else {
        todos.forEach(todoData => {
            const card = createCard(todoData);
            projects.appendChild(card);
        });
    }

    return projects;
}

function saveToLocalStorage(todoData) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(todoData);
    localStorage.setItem('todos', JSON.stringify(todos));
}