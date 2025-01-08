import Task from "./task";

export default class TaskList {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.tasks = {};
        this.nextId = 1;
    }

    addTask(title, description, dueDate, priority) {
        this.tasks[this.nextId++] = new Task(nextId, title, description, dueDate, priority);
        return this.nextId - 1;
    }

    removeTask(taskId) {
        delete this.tasks[taskId];
    }

    getTask(taskId) {
        return this.tasks[taskId];
    }

    editTask(taskId, title, description, dueDate, priority) {
        this.tasks[taskId] = new Task(taskId, title, description, dueDate, priority);
    }
}

let nextId = 1;

let listProps = {
    currentList: 0,
    taskLists: [new TaskList(0, 'My List')],
    removeList: (listId) => {
        listProps.taskLists = listProps.taskLists.filter(list => list.id !== listId);
    },
    addList: (listName) => {
        listProps.taskLists.push(new TaskList(nextId++, listName));
    }
}

export { listProps };