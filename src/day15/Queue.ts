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
        this.length++;
        const node = {value: item} as Node<T>;

        if (!this.head || !this.tail) {
            this.head = this.tail = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    deque(): T | undefined {
        if (!this.head) {
            return;
        }
        this.length--;
        const dequedNode = this.head;
        
        this.head = this.head.next;
        dequedNode.next = undefined;

        return dequedNode.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
