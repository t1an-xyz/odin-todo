import './styles.css';

import { listProps } from './taskList';

import { updateSidebar } from './Components/sidebar';
import renderTaskList from './Components/taskListView';

if (localStorage.getItem('listProps')) {
    let savedSession = JSON.parse(localStorage.getItem('listProps'));
    listProps.currentList = savedSession.currentList;
    listProps.taskLists = savedSession.taskLists;
}

updateSidebar();
renderTaskList();