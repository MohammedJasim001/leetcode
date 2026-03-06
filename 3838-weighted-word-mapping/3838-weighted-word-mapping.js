/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function (words, weights) {
    const order = "zyxwvutsrqponmlkjihgfedcba".split("");

    let result = ""
    for (i = 0; i < words.length; i++) {
        let sum = 0
        for (j = 0; j < words[i].length; j++) {
            sum += (weights[words[i].charCodeAt(j) - 97])
        }
        const val = sum % 26
        result += order[val]
    }
    return result
};