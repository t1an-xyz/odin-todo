import { listProps } from "./taskList";
import { updateSidebar } from "./sidebar";


const listMenu = document.getElementById('add-list-popup');
const listMenuBg = document.getElementById('bg-disabled');

const listNameInput = document.getElementById('list-name-input');

document.getElementById('add-list-popup-close').addEventListener('click', () => {
    listMenu.classList.add('hidden');
    listMenuBg.classList.add('hidden');
    listNameInput.value = '';
});

const form = document.getElementById('create-list-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (form.reportValidity()) {
        listProps.addList(listNameInput.value);
        listMenu.classList.add('hidden');
        listMenuBg.classList.add('hidden');
        listNameInput.value = '';
        updateSidebar();
    }
});

const createListMenu = () => {
    listMenu.classList.remove('hidden');
    listMenuBg.classList.remove('hidden');
};

export default createListMenu;