// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

let memoization = {};
function fib(n) {
    if (memoization[n]) {
        return memoization[n];
    }
    if (n < 1) {
        return 0;
    }

    if (n == 1) {
        return 1;
    }

    memoization[n] = fib(n - 1) + fib(n - 2);

    return memoization[n];
}


// function fib(n) {
//     let sum1 = 0;
//     let sum2 = 1;
//     let currentSum = 1;
//     if (n < 1) {
//         return 0;
//     }
//     if (n == 1) {
//         return 1;
//     }

//     for (let i = 2; i <= n; i++) {
//         currentSum = sum2 + sum1;

//         sum1 = sum2;
//         sum2 = currentSum;
//     }

//     return currentSum;
// }

module.exports = fib;
