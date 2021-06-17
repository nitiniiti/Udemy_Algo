// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let startRowCount = 0;
    let endRowCount = n - 1;
    let startColumnCount = 0;
    let endColumnCount = n - 1;
    let finalArray = [];
    let currentNumber = 0;

    for (let i = 0; i < n; i++) {
        finalArray.push([]);
    }

    while (startRowCount <= endRowCount && startColumnCount <= endColumnCount) {
        for (let i = startColumnCount; i <= endColumnCount; i++) {
            finalArray[startRowCount][i] = ++currentNumber;
        }
        startRowCount++;

        for (let j = startRowCount; j <= endRowCount; j++) {
            finalArray[j][endColumnCount] = ++currentNumber;
        }
        endColumnCount--;

        for (let k = endColumnCount; k >= startColumnCount; k--) {
            finalArray[endRowCount][k] = ++currentNumber;
        }
        endRowCount--;

        for (let l = endRowCount; l >= startRowCount; l--) {
            finalArray[l][startColumnCount] = ++currentNumber;
        }
        startColumnCount++;

    }

    return finalArray;
}

matrix(3);

module.exports = matrix;
