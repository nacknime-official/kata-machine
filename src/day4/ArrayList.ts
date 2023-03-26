export default class ArrayList<T> {
    public length: number;
    private capacity: number;
    private arr: Array<T | undefined>



    constructor(capacity: number) {
        this.length = 0;
        this.capacity = capacity;
        this.arr = new Array<T | undefined>(capacity);
    }


    prepend(item: T): void {
        console.log(this.arr)
        if (this.length === this.capacity) {
            this.increaseCapacity();
        }

        this.shiftLeft(0);

        this.arr[0] = item;
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (this.length === this.capacity) {
            this.increaseCapacity();
        }

        this.shiftLeft(idx);

        this.arr[idx] = item;
        this.length++;
    }

    append(item: T): void {
        if (this.length === this.capacity) {
            this.increaseCapacity();
        }

        this.arr[this.length] = item;
        this.length++;
    }

    remove(item: T): T | undefined {
        for (let i = 0; i < this.length; i++) {
            if (this.arr[i] === item) {
                return this.removeAt(i);
            }
        }
        return
    }

    get(idx: number): T | undefined {
        if (idx >= this.length) {
            return
        }
        return this.arr[idx];
    }

    removeAt(idx: number): T | undefined {
        if (idx >= this.length) {
            return
        }

        const removingEl = this.arr[idx];
        this.arr[idx] = undefined;

        for (let i = idx; i < this.length - 1; i++) {
            this.arr[i] = this.arr[i + 1];
        }

        this.arr[this.length - 1] = undefined;
        this.length--;
        return removingEl
    }

    private increaseCapacity(): void {
        this.capacity *= 2;

        const newArr = new Array<T | undefined>(this.capacity);
        for (let i = 0; i < this.length; i++) {
            newArr[i] = this.arr[i];
        }

        this.arr = newArr;
    }

    private shiftLeft(from: number): void {
        for (let i = this.length; i > from; i--) {
            this.arr[i] = this.arr[i - 1];
        }
    }
}
