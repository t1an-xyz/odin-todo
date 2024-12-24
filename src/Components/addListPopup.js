import { listProps } from "../taskList";
import { updateSidebar } from "./sidebar";


const listMenu = document.getElementById('add-list-popup');
const listMenuBg = document.getElementById('bg-disabled');

const listNameInput = document.getElementById('list-name-input');

const closePopup = () => {
    listMenu.classList.add('hidden');
    listMenuBg.classList.add('hidden');
    listNameInput.value = '';
}

document.getElementById('add-list-popup-close').addEventListener('click', closePopup);

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
    document.onkeydown = (e) => {
        if (e.key === 'Escape' || e.key === 'Esc') {
            closePopup();
        }
    };
};

export default createListMenu;