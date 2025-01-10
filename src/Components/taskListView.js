import { listProps } from "../taskList";
import Task from "./task";

import NewTaskBtn from "./newTaskBtn";

const container = document.querySelector('.main');

const heading = document.createElement('h1');
container.appendChild(heading);

const taskList = document.createElement('div');
taskList.className = 'task-list';
container.appendChild(taskList);
container.appendChild(NewTaskBtn());

const renderTaskList = () => {
    taskList.innerHTML = '';
    for (let key in listProps.taskLists[listProps.currentList].tasks) {
        const task = listProps.taskLists[listProps.currentList].tasks[key];
        const taskDiv = Task(task, listProps.taskLists[listProps.currentList]);
        taskList.appendChild(taskDiv);
    }
}

export default () => {
    heading.textContent = listProps.taskLists[listProps.currentList].title;
    renderTaskList();
}