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
        const deleteBtn = document.createElement('div');
        deleteBtn.innerHTML = '<span class="iconify" data-icon="mdi-delete"></span>';
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log('delete');
            if (confirm('Are you sure you want to delete this list?')) {
                const listItems = Array.from(sidebar.getElementsByTagName('li'));
                const index = listItems.indexOf(row);
                listProps.removeList(index);
                updateSidebar();
                renderTaskList();
            }
        });
        list.appendChild(listTitle);
        list.appendChild(deleteBtn);
        list.addEventListener('click', () => {
            const listItems = Array.from(sidebar.getElementsByTagName('li'));
            const index = listItems.indexOf(row);
            listProps.currentList = index;
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