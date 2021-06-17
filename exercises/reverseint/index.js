// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//     let minusSign = false;
//     if (n < 0) {
//         minusSign = true;
//         n = n * -1;
//     }
//     let numberString = String(n);
//     return minusSign ? -1 * Number(numberString.split('').reverse().join('')) : Number(numberString.split('').reverse().join(''));
// }


function reverseInt(n) {
    let numberString = String(n);
    return parseInt(numberString.split('').reverse().join('')) * Math.sign(n);
}

module.exports = reverseInt;
