export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            const curr = arr[j];
            const next = arr[j + 1];
            if (curr > next) {
                arr[j] = next;
                arr[j + 1] = curr;
            }
        }
    }
}
