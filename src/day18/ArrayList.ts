export default class ArrayList<T> {
    public length: number;
    private capacity: number;
    private arr: Array<T | undefined>;


    constructor(capacity: number) {
        this.length = 0;
        this.capacity = capacity;
        this.arr = new Array<T | undefined>(capacity);
    }

    prepend(item: T): void {
        return this.insertAt(item, 0);
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            return;
        }

        if (this.length === this.capacity) {
            this.increaseArrSize();
        }

        this.shiftRight(idx);
        this.arr[idx] = item;
        this.length++;
    }

    append(item: T): void {
        return this.insertAt(item, this.length);
    }

    remove(item: T): T | undefined {
        for (let i = 0; i < this.length; i++) {
            if (item === this.arr[i]) {
                return this.removeAt(i);
            }
        }
        return;
    }

    get(idx: number): T | undefined {
        if (idx >= this.length) {
            return;
        }
        return this.arr[idx];
    }

    removeAt(idx: number): T | undefined {
        if (idx >= this.length) {
            return;
        }
        const removingEl = this.arr[idx];

        this.shiftLeft(idx);

        this.length--;
        return removingEl;
    }

    private increaseArrSize(): void {
        this.capacity *= 2;
        const newArr = new Array<T | undefined>(this.capacity);

        for (let i = 0; i < this.length; i++) {
            newArr[i] = this.arr[i];
        }

        this.arr = newArr;
    }

    private shiftLeft(from: number): void {
        for (let i = from; i < this.length - 1; i++) {
            this.arr[i] = this.arr[i + 1];
        }
        this.arr[this.length - 1] = undefined;
    }

    private shiftRight(from: number): void {
        for (let i = this.length; i > from; i--) {
            this.arr[i] = this.arr[i - 1];
        }
    }
}
