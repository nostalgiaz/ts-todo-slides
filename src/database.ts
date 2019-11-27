export class DataBase {
    private items: string[] = [];

    list(): string[] {
        return this.items;
    }

    create(task: string) {
        this.items.push(task);
    }

    update(oldTask: string, newTask: string): void {
        this.items = this.items.map((t: string) => {
            if (t === oldTask) {
                return newTask
            }
            return t;
        });
    }
}
