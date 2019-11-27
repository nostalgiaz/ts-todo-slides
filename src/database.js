export class DataBase {
    items = [];

    list() {
        return this.items;
    }

    create(task) {
        this.items.push(task);
    }
}
