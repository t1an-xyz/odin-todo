import './styles.css';

import Task from './task';

import { listProps } from './taskList';

import { updateSidebar } from './Components/sidebar';
import renderTaskList from './Components/taskListView';

listProps.taskLists[listProps.currentList].addTask(new Task(
    0,
    'Task 1',
    'This is a task',
    Date.now(),
    1
));

updateSidebar();
renderTaskList();