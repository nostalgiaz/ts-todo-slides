export class DataBase {
    items = [];

    list() {
        return this.items;
    }

    create(task) {
        this.items.push(task);
    }

    update(oldTask, newTask) {
        this.items = this.items.map(t => {
            if (t === oldTask) {
                return newTask
            }
            return t;
        });
    }
}
