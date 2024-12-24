export default class TaskList {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.tasks = {};
    }

    addTask(task) {
        this.tasks[task.id] = task;
    }

    removeTask(taskId) {
        delete this.tasks[taskId];
    }

    getTask(taskId) {
        return this.tasks[taskId];
    }

    editTask(taskId, newTask) {
        this.tasks[taskId] = newTask;
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