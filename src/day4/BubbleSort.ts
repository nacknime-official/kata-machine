export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) { // i = 0; i < 5
        for (let j = 0; j < arr.length - 1 - i; j++) { // j = 0, j < 4
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
        }
    }
}
