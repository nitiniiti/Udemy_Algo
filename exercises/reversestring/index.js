// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     let newString = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString = newString + str[i];
//     }
//     return newString;
// }


// function reverse(str) {
//     let newStringArray = str.split('');
//     return newStringArray.reverse().join('');
// }



function reverse(str) {
    let newStringArray = str.split('');

    return newStringArray.reduce((finalString, character) => {
        return character + finalString
    }, '');
}

module.exports = reverse;
