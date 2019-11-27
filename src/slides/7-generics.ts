class Queue<T> {
    private data: T[] = [];
    push(item: T) { this.data.push(item); }
    pop(): T | undefined { return this.data.shift(); }
  }
  
const queue = new Queue<number>();
queue.push(0);