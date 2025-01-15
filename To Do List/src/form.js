export function createToDoForm(onSubmitCallback) {
    const form = document.createElement('form')
    form.id = 'todo-form'

    const titleInput = document.createElement('input')
    titleInput.type = 'text'
    titleInput.placeholder = 'Title'
    titleInput.name = 'title'
    titleInput.required = true

    const descriptionInput = document.createElement('input')
    descriptionInput.type = 'text'
    descriptionInput.name = 'description'
    descriptionInput.placeholder = 'Description'
    descriptionInput.required = true

    const dueDateInput = document.createElement('input')
    dueDateInput.type = 'date'
    dueDateInput.name = 'duedate'
    dueDateInput.required = true

    const prioritySelect = document.createElement('select');
    prioritySelect.name = 'priority';

    ['Low', 'Medium', 'High'].forEach(priority => {
        const option = document.createElement('option');
        option.value = priority.toLowerCase();
        option.textContent = priority;
        prioritySelect.appendChild(option);
    });

    const sumbitButton = document.createElement('button');
    sumbitButton.type = 'submit';
    sumbitButton.textContent = 'Add'

    form.appendChild(titleInput)
    form.appendChild(descriptionInput)
    form.appendChild(dueDateInput)
    form.appendChild(prioritySelect)
    form.appendChild(sumbitButton)

    form.addEventListener('submit', event => {
        event.preventDefault();

        const formData = {
            title: titleInput.value,
            description: descriptionInput.value,
            dueDate: dueDateInput.value,
            priority: prioritySelect.value,
        };
        form.reset();

        saveToLocalStorage(formData)

        if (onSubmitCallback) {
            onSubmitCallback(formData);
        }

    });

    return form
}

function saveToLocalStorage(todoData) {
    let todos = JSON.parse(localStorage.getItem('todos')) || []; 
    todos.push(todoData); 
    localStorage.setItem('todos', JSON.stringify(todos)); 
}