import './styles.css';

import { listProps } from './taskList';

import { updateSidebar } from './Components/sidebar';
import renderTaskList from './Components/taskListView';

import TaskList from './taskList';
import Task from './task';

if (localStorage.getItem('listProps')) {
    let savedSession = JSON.parse(localStorage.getItem('listProps'));
    listProps.currentList = 0;
    savedSession.taskLists.forEach(taskList => {
        console.log(taskList);
        listProps.taskLists.push(new TaskList(taskList.title));
        Object.entries(taskList.tasks).forEach(([key, task]) => {
            listProps.taskLists[listProps.taskLists.length - 1].tasks[key] = new Task(task.id, task.title, task.description, task.dueDate, task.priority);
        });
        listProps.taskLists[listProps.taskLists.length - 1].nextId = taskList.nextId;
    });
}
else {
    listProps.addList('My List');
}

updateSidebar();
renderTaskList();