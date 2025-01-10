import Task from "./task";

export default class TaskList {
    constructor(id, title) {
        this.id = id;
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

let nextId = 1;

let listProps = {
    currentList: 0,
    taskLists: [new TaskList(0, 'My List')],
    removeList: (listId) => {
        listProps.taskLists = listProps.taskLists.filter(list => list.id !== listId);
        localStorage.setItem('listProps', JSON.stringify(listProps));
    },
    addList: (listName) => {
        listProps.taskLists.push(new TaskList(nextId++, listName));
        localStorage.setItem('listProps', JSON.stringify(listProps));
    }
}

export { listProps };