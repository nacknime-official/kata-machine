export default function bubble_sort(arr: number[]): void {
    for (let i = arr.length; i !== 1; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                const a = arr[j];
                const b = arr[j + 1];
                arr[j] = b;
                arr[j + 1] = a;
            }
        }
    }
}
