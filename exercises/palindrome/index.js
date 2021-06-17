// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//     let palindromeStatus = false;
//     let reversedString = str.split('').reverse().join('');
//     if (str === reversedString) {
//         palindromeStatus = true;
//     }
//     return palindromeStatus;
// }


function palindrome(str) {
    let palindromeStatus = true;
    for (let i = 0; i < str.length / 2 - 1; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            palindromeStatus = false;
            break;
        }
    }
    return palindromeStatus;
}

module.exports = palindrome;
