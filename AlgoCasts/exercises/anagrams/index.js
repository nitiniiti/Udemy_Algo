// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let stringA_Array = [];
    let stringB_Array = [];
    let anagramStatus = true;

    for (let i = 0; i < stringA.length; i++) {
        if (stringA[i] !== ' ') {
            stringA_Array.push(stringA[i].toLowerCase());
        }
    }

    for (let i = 0; i < stringB.length; i++) {
        if (stringB[i] !== ' ') {
            stringB_Array.push(stringB[i].toLowerCase());
        }
    }

    if (stringA_Array.length === stringB_Array.length) {
        stringA_Array.forEach((character) => {
            if (stringB_Array.indexOf(character) < 0) {
                anagramStatus = false;
            }
        })
    } else {
        anagramStatus = false;
    }

    return anagramStatus;
}

module.exports = anagrams;
