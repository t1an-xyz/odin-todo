import { listProps } from "../taskList";
import Task from "./task";

import NewTaskBtn from "./newTaskBtn";

const container = document.querySelector('.main');

const heading = document.createElement('h1');
container.appendChild(heading);

const taskList = document.createElement('div');
taskList.className = 'task-list';
container.appendChild(taskList);

const newTaskBtn = NewTaskBtn();

const renderTaskList = () => {
    taskList.innerHTML = '';
    for (let key in listProps.taskLists[listProps.currentList].tasks) {
        const task = listProps.taskLists[listProps.currentList].tasks[key];
        const taskDiv = Task(task, listProps.taskLists[listProps.currentList]);
        taskList.appendChild(taskDiv);
    }
}

export default () => {
    newTaskBtn.remove();
    if (listProps.taskLists.length === 0) {
        heading.textContent = '';
        const message = document.createElement('p');
        message.textContent = 'You have no task lists.';
        taskList.appendChild(message);
    }
    else {
        heading.textContent = listProps.taskLists[listProps.currentList].title;
        renderTaskList();
        container.appendChild(newTaskBtn);
    }
}