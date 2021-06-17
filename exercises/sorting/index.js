// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                arr[j] = arr[j] + arr[j + 1];
                arr[j + 1] = arr[j] - arr[j + 1];
                arr[j] = arr[j] - arr[j + 1];
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i; j <= arr.length - 1; j++) {
            if (arr[j] < arr[minIndex]) {
                let temp = arr[j];
                arr[j] = arr[minIndex];
                arr[minIndex] = temp;
            }
        }
    }

    return arr;

}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    let center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {

    const results = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    return [...results, ...left, ...right];
}


// console.log(bubbleSort([100, -40, 500, -124, 0, 21, 7]));
// console.log(selectionSort([100, -40, 500, -124, 0, 21, 7]));
console.log(mergeSort([100, -40, 500, -124, 0, 21, 7]));

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
