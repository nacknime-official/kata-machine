type Node<T> = {
    value: T;
    next?: Node<T>;
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        const node = {value: item} as Node<T>;

        node.next = this.head;
        this.head = node;

        this.length++;
    }

    pop(): T | undefined {
        if (!this.head) {
            return;
        }

        const poppingNode = this.head;
        this.head = poppingNode.next;

        poppingNode.next = undefined;
        this.length--;
        return poppingNode.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
