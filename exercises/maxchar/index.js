// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let characterOccurenceObject = {};
    let maxCharacter = str[0];
    let maxNumber = 0;

    for (let i = 0; i < str.length - 1; i++) {
        if (characterOccurenceObject[str[i]]) {
            characterOccurenceObject[str[i]]++;
        } else {
            characterOccurenceObject[str[i]] = 1;
            maxNumber = 1;
        }

        if (characterOccurenceObject[str[i]] > maxNumber) {
            maxNumber = characterOccurenceObject[str[i]];
            maxCharacter = str[i];
        }
    }

    return maxCharacter;
}

console.log(maxChar('a'));

module.exports = maxChar;
