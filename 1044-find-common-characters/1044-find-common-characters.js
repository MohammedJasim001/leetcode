/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
    let firstWord = words[0].split('');
    let result = [];

    for (let char of firstWord) {
        let foundInAll = true;
        for (let i = 1; i < words.length; i++) {
            if (words[i].includes(char)) {
                words[i] = words[i].replace(char, "");
            } else {
                foundInAll = false;
                break;
            }
        }
        if (foundInAll) {
            result.push(char);
        }
    }
    return result;
};