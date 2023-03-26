type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    

    constructor() {
        this.length = 0;
    }

    push(item: T): void {
        const node = {value: item} as Node<T>;
        if (!this.head) {
            this.head = node
            this.length++
            return
        }

        // recurcive reference
        node.prev = this.head;
        this.head.next = node

        this.head = node

        this.length++
    }

    pop(): T | undefined {
        // is the stack if empty
        if (!this.head) {
            return
        }

        // is there only 1 element in stack
        if (!this.head.prev) {
            const head = this.head;
            this.head = undefined
            this.length--;
            return head.value;
        }

        // is there bunch of elements in stack
        const head = this.head;
        const prev = this.head.prev
        prev.next = undefined
        this.head = prev
        this.length--
        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
