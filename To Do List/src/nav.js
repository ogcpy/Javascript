import { createToDoForm } from "./form"
import { createCard } from "./card";

export function loadNav() {
    const content = document.getElementById('content');

    const sideNav = document.createElement('nav');
    const addItemBtn = document.createElement('button');
    addItemBtn.classList.add('addItemBtn');
    addItemBtn.textContent = '+ Add';

    content.appendChild(sideNav);
    sideNav.appendChild(addItemBtn);

    let form;

    addItemBtn.addEventListener('click', () => {
        if (!form) {
            form = createToDoForm((formData) => {
                const card = createCard(formData);
                const projects = document.getElementById('projects');
                projects.appendChild(card);
            }); 
            sideNav.appendChild(form);
            form.classList.add('hidden');
        }

        if (form.style.display === 'none' || !form.style.display) {
            form.style.display = 'flex'; 
        } else {
            form.style.display = 'none'; 
        }
    })
}