import moment from "moment";

export default class Task {
    constructor(id, title, description, dueDate, priority) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    printDate() {
        return moment(this.dueDate).format('M/D/YYYY');
    }
}