import { listProps } from "../taskList";
import Task from "./task";

const container = document.querySelector('.main');

const heading = document.createElement('h1');
container.appendChild(heading);

const taskList = document.createElement('div');
taskList.className = 'task-list';
container.appendChild(taskList);

const renderTaskList = () => {
    taskList.innerHTML = '';
    for (let key in listProps.taskLists[listProps.currentList].tasks) {
        const task = listProps.taskLists[listProps.currentList].tasks[key];
        const taskDiv = Task(task);
        taskList.appendChild(taskDiv);
    }
}

export default () => {
    heading.textContent = listProps.taskLists[listProps.currentList].title;
    renderTaskList();
}