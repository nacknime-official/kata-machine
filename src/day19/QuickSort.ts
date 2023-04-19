function qs(arr: number[], lo: number, hi: number): void {
    if (lo >= hi) {
        return;
    }

    const pivotIdx = partition(arr, lo, hi);

    qs(arr, lo, pivotIdx);
    qs(arr, pivotIdx + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
    const pivotIdx = Math.floor((lo + hi) / 2);
    const pivot = arr[pivotIdx];
    let i = lo;
    let j = hi;

    while (true) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }

        if (i >= j) {
            return j;
        }

        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
