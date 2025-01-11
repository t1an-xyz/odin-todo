import Task from "./task";

export default class TaskList {
    constructor(title) {
        this.title = title;
        this.tasks = {};
        this.nextId = 1;
    }

    addTask(title, description, dueDate, priority) {
        this.tasks[this.nextId] = new Task(this.nextId, title, description, dueDate, priority);
        this.nextId++;
        localStorage.setItem('listProps', JSON.stringify(listProps));
        return this.nextId - 1;
    }

    removeTask(taskId) {
        delete this.tasks[taskId];
        localStorage.setItem('listProps', JSON.stringify(listProps));
    }

    getTask(taskId) {
        return this.tasks[taskId];
    }

    editTask(taskId, title, description, dueDate, priority) {
        this.tasks[taskId] = new Task(taskId, title, description, dueDate, priority);
        localStorage.setItem('listProps', JSON.stringify(listProps));
    }
}

let listProps = {
    currentList: 0,
    taskLists: [],
    removeList: (listId) => {
        listProps.taskLists.splice(listId, 1);
        localStorage.setItem('listProps', JSON.stringify(listProps));
        if (listProps.currentList >= listProps.taskLists.length) {
            listProps.currentList = 0;
        }
    },
    addList: (listName) => {
        listProps.taskLists.push(new TaskList(listName));
        localStorage.setItem('listProps', JSON.stringify(listProps));
    }
}

export { listProps };