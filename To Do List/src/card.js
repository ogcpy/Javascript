import { format, differenceInDays, isPast, isToday } from 'date-fns';

export function createCard(todoData) {
    const card = document.createElement('div');
    card.classList.add('card');

    const title = document.createElement('h3');
    title.classList.add('title')
    title.textContent = todoData.title;

    const description = document.createElement('p');
    description.classList.add('description')
    description.textContent = todoData.description;

    const dueDate = document.createElement('p');
    const formattedDate = format(new Date(todoData.dueDate), 'd/MM/yy');
    dueDate.classList.add('due-date')
    dueDate.textContent = `${formattedDate}`;

    const daysLeft = document.createElement('p');
    daysLeft.classList.add('days-left')
    const currentDate = new Date();
    const dueDateObj = new Date(todoData.dueDate);

    if (isPast(dueDateObj) && !isToday(dueDateObj)) {
        daysLeft.textContent = "Overdue";
        daysLeft.style.color = "red"; 
    } else if (isToday(dueDateObj)) {
        daysLeft.textContent = "Due today";
        daysLeft.style.color = "white"; 
    } else {
        const daysDifference = differenceInDays(dueDateObj, currentDate);
        daysLeft.textContent = `${daysDifference} day(s) left`;
        daysLeft.style.color = "green"; 
    }

    const priority = document.createElement('p')
    priority.classList.add('priority')
    priority.textContent = todoData.priority;

    if (todoData.priority == 'high') {
        priority.style.color = "brown"
    } else if (todoData.priority == 'medium') {
        priority.style.color = 'green'
    } else {
        priority.style.color = 'pink'
    }

    const removeButton = document.createElement('button');
    removeButton.textContent = 'X';
    removeButton.classList.add('remove-button')

    removeButton.addEventListener('click', () => {
        removeFromLocalStorage(todoData);
        card.remove();
    });

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(daysLeft)
    card.appendChild(dueDate);
    card.appendChild(priority);
    card.appendChild(removeButton);

    return card;
}

function removeFromLocalStorage(todoData) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos = todos.filter(todo => todo.title !== todoData.title || todo.dueDate !== todoData.dueDate); // Filter out the deleted todo
    localStorage.setItem('todos', JSON.stringify(todos));
}