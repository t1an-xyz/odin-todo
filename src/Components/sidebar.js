import { listProps } from "../taskList";
import createListMenu from "./addListPopup";
import renderTaskList from "./taskListView";
import { closeSidebar } from "./taskDetails";

const sidebar = document.getElementById('lists');

const updateSidebar = () => {
    sidebar.innerHTML = '';
    listProps.taskLists.forEach((taskList) => {
        const row = document.createElement('li');
        const list = document.createElement('div');
        list.className = 'task-list-item';
        if (taskList.id === listProps.currentList) {
            list.classList.add('selected');
        }
        const listTitle = document.createElement('h3');
        listTitle.textContent = taskList.title;
        list.appendChild(listTitle);
        list.addEventListener('click', () => {
            listProps.currentList = taskList.id;
            closeSidebar();
            updateSidebar();
            renderTaskList();
        });
        row.appendChild(list);
        sidebar.appendChild(row);
    });
    const addBtn = document.createElement('li');
    addBtn.innerHTML = '<button class="task-list-item"><h3>Add List</h3></button>';
    addBtn.addEventListener('click', createListMenu);
    sidebar.appendChild(addBtn);
};

export { updateSidebar };``