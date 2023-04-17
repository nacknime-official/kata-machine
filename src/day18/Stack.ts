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
        this.length++;
        const node = { value: item, next: this.head }

        this.head = node;
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
