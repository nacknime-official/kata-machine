export default class ArrayList<T> {
    public length: number;
    private cap: number;
    private arr: Array<T|undefined>;


    constructor(cap: number) {
        this.length = 0;
        this.cap = cap;
        this.arr = new Array<T>(cap);
    }

    prepend(item: T): void {
        if (this.length === this.cap) {
            this.cap *= 2;

            let newArr = new Array<T|undefined>(this.cap);
            newArr[0] = item;
            for (let i = 0; i < this.length; i++) {
                newArr[i + 1] = this.arr[i]
            }
            this.length++;
            this.arr = newArr;
            return
        }

        for (let i = this.length; i > 0; i--) { // i = 1, i < 0, [5, und, und]
            this.arr[i] = this.arr[i - 1]; // this.arr[1] = this.arr[0], [5, 5, und]
        }
        this.arr[0] = item;
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (this.length === this.cap) {
            this.cap *= 2
            const newArr = new Array<T|undefined>(this.cap)
            for (let i = 0; i < this.length; i++) {
                newArr[i] = this.arr[i]
            }
        }

        for (let i = this.length; i > idx; i--) { // i = 2; i > 1
            this.arr[i] = this.arr[i - 1]; // this.arr[2] = this.arr[1], [7, 5, 5]
        }
        this.arr[idx] = item

        this.length++
    }

    append(item: T): void {
        if (this.length === this.cap) {
            this.cap *= 2;

            let newArr = new Array<T|undefined>(this.cap);
            for (let i = 0; i < this.length; i++) {
                newArr[i] = this.arr[i];
            }
            this.arr = newArr;
        }

        this.arr[this.length] = item;
        this.length++;
    }

    remove(item: T): T | undefined {
        for (let i = 0; i < this.length - 1; i++) {
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
        if (this.length === 0) {
            return
        }

        const tmp = this.arr[idx];
        if (idx === this.length - 1) {
            this.arr[idx] = undefined;
            this.length--;
            return tmp;
        }

        for (let i = idx + 1; i < this.length; i++) { // i = 2; i < 2
            this.arr[i - 1] = this.arr[i];
        }
        this.arr[this.length-1] = undefined;
        this.length--;
        return tmp;
    }
}
