export interface Task {
    id: number;
    text: string;
    isCompleted: boolean;
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
            isCompleted: false,
        });
    }

    update(taskId: number, newTask?: string, isCompleted?: boolean): void {
        this.items = this.items.map((t: Task) => {
            if (t.id === taskId) {
                if (newTask != null) {
                    t.text = newTask;
                }
                if (isCompleted != null) {
                    t.isCompleted = isCompleted;
                }
            }
            return t;
        });
    }
}
