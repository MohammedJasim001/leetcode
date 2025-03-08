/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function (words, separator) {
    a = []
    for (i = 0; i < words.length; i++) {
        a.push(words[i].split(separator))
    }
    return a.flat().filter((e) => e !== "")
};