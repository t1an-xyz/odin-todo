import { listProps } from "../taskList";
import renderTaskList from "./taskListView";

let sidebarOpen = false;

const sidebar = document.getElementById('task-details')

let heading;
let dueDate;
let description;

let headingInput;
let dueDateInput;
let descriptionInput;

const setEditMode = (editMode) => {
    sidebar.innerHTML = '';
    if (!sidebarOpen) {
        sidebar.classList.add('expanded');
        sidebarOpen = true;
    }
    if (editMode) {
        const container = document.createElement('div');
        container.id = 'task-form';
        const form = document.createElement('form');
        headingInput = document.createElement('input');
        headingInput.placeholder = 'Title'
        headingInput.type = 'text';
        headingInput.required = true;
        form.appendChild(headingInput);

        dueDateInput = document.createElement('input');
        dueDateInput.type = 'date';
        form.appendChild(dueDateInput);

        descriptionInput = document.createElement('textarea');
        descriptionInput.placeholder = 'Description';
        descriptionInput.addEventListener('input', () => {
            descriptionInput.style.flexBasis = 'auto';
            descriptionInput.style.flexBasis = (descriptionInput.scrollHeight + 5) + 'px';
        });
        form.appendChild(descriptionInput);
        container.appendChild(form);

        const submitContainer = document.createElement('div');
        submitContainer.id = 'task-form-submit';
        const submitBtn = document.createElement('button');
        submitBtn.textContent = 'Save';
        submitBtn.type = 'submit';
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (form.reportValidity()) {
                let currentList = listProps.taskLists[listProps.currentList];
                currentList.addTask(headingInput.value, descriptionInput.value, dueDateInput.value, 1);
                renderTaskList();
                renderTaskDetails(currentList.tasks[currentList.nextId - 1]);
            }
        });
        submitContainer.appendChild(submitBtn);
        container.appendChild(submitContainer);
        
        sidebar.appendChild(container);

        headingInput.focus();
    }
    else {
        const container = document.createElement('div');
        container.style.padding = '10px';
        container.style.overflowY = 'scroll';
        heading = document.createElement('h1');
        container.appendChild(heading);

        dueDate = document.createElement('p');
        container.appendChild(dueDate);

        description = document.createElement('p');
        container.appendChild(description);
        sidebar.appendChild(container);
    }
}

const renderTaskDetails = (task) => {
    setEditMode(false);
    heading.textContent = task.title;
    dueDate.textContent = task.printDate();
    description.textContent = task.description;
}

const newTask = () => {
    setEditMode(true);
    headingInput.value = '';
    dueDateInput.value = '';
    descriptionInput.value = '';
}

export { renderTaskDetails, newTask };