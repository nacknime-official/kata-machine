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

    private shiftRight(from: number): void {
        for (let i = this.length; i > from; i--) {
            this.arr[i] = this.arr[i - 1];
        }
    }

    private increaseArrSize(): void {
        this.capacity *= 2;

        const newArr = new Array<T | undefined>(this.capacity);
        for (let i = 0; i < this.length; i++) {
            newArr[i] = this.arr[i];
        }

        this.arr = newArr;
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length || idx < 0) {
            return;
        }

        if (this.length === this.capacity) {
            this.increaseArrSize();
        }
        
        this.shiftRight(idx);
        this.arr[idx] = item;
        this.length++;
        console.log(this.arr)
    }

    append(item: T): void {
        return this.insertAt(item, this.length);
    }

    remove(item: T): T | undefined {
        for (let i = 0; i < this.length; i++) {
            if (item === this.arr[i]) {
                return this.removeAt(i)
            }
        }
        return;
    }

    get(idx: number): T | undefined {
        if (idx >= this.length || idx < 0) {
            return;
        }
        return this.arr[idx];
    }

    private shiftLeft(from: number): void {
        for (let i = from; i <= this.length; i++) {
            this.arr[i] = this.arr[i + 1];
        }
    }

    removeAt(idx: number): T | undefined {
        if (idx >= this.length || idx < 0) {
            return;
        }

        const removingEl = this.arr[idx];
        this.shiftLeft(idx);

        this.length--;
        return removingEl;
    }
}
