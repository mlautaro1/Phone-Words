// always transform the number to the letter with the maximum value, as long as it does not have a 1 in the middle.
const regExp = /([\d])\1{0,}/g;

let matches = [];

const numbersToText = (string) => {
    matches = [];
    if (!string.length) {
        return ''
    } else {
        // Return a lowercase string.
        matches = string.match(regExp);
        console.log('Found matches: ', matches);
    }
}

module.exports.numbersToText = numbersToText;