type Node<T> = {
    value: T;
    next?: Node<T>;
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    enqueue(item: T): void {
        const node = {value: item} as Node<T>;

        if (this.tail) {
            this.tail.next = node
        }
        this.tail = node;
        if (!this.head) {
            this.head = node;
        }

        this.length++;
    }
    deque(): T | undefined {
        if (!this.head) {
            return
        }

        const dequedNode = this.head;

        this.head = this.head.next;

        dequedNode.next = undefined;
        this.length--;
        return dequedNode.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
