export interface Task {
    id: number;
    text: string;
}

export class DataBase {
    private items: Task[] = [];

    list(): Task[] {
        return this.items;
    }

    create(task: string) {
        this.items.push({
            id: this.items.length,
            text: task,
        });
    }

    update(taskId: number, newTask: string): void {
        this.items = this.items.map((t: Task) => {
            if (t.id === taskId) {
                return {
                    id: t.id,
                    text: newTask,
                }
            }
            return t;
        });
    }
}
