import { renderTaskDetails, closeSidebar } from "./taskDetails";
import renderTaskList from './taskListView'

export default (task, taskList) => {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    taskDiv.innerHTML = `
        <div class="task-bubble">
            <div class="task-bubble-fill"></div>
        </div>
        <div class="task-content"></div>
    `
    taskDiv.querySelector('.task-bubble').addEventListener('click', () => {
        taskDiv.classList.toggle('completed');
        taskList.removeTask(task.id);
        setTimeout(() => {
            closeSidebar();
            renderTaskList();
        }, 1000);
    });
    const taskContent = taskDiv.querySelector('.task-content');
    const taskTitle = document.createElement('h3');
    taskTitle.textContent = task.title;
    taskContent.appendChild(taskTitle);
    if (task.dueDate) {
        const taskDate = document.createElement('p');
        taskDate.textContent = task.printDate();
        taskContent.appendChild(taskDate);
    }
    taskDiv.addEventListener('click', () => {
        renderTaskDetails(task);
    });

    return taskDiv;
};