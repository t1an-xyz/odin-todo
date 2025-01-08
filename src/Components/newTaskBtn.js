import { newTask } from "./taskDetails";

const btn = document.createElement('button');
btn.id = 'new-task-btn';

const icon = document.createElement('span');
icon.className = 'iconify';
icon.setAttribute('data-icon', 'mdi-plus');
btn.appendChild(icon);

const text = document.createElement('span');
text.textContent = 'New Task';
btn.appendChild(text);

btn.addEventListener('click', newTask);

export default () => btn;