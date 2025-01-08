let sidebarOpen = false;

const sidebar = document.getElementById('task-details')

const heading = document.createElement('h1');
sidebar.appendChild(heading);

const dueDate = document.createElement('p');
sidebar.appendChild(dueDate);

const description = document.createElement('p');
sidebar.appendChild(description);

const renderTaskDetails = (task) => {
    if (!sidebarOpen) {
        sidebar.classList.add('expanded');
        sidebarOpen = true;
    }
    heading.textContent = task.title;
    dueDate.textContent = task.printDate();
    description.textContent = task.description;
}

export { renderTaskDetails };