/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
    c = []
    for (i = num.length - 1; i >= 0; i--) {
        if (num[i] % 2 !== 0) {
            break
        } else {
            num = num.substring(0, num.length - 1)
        }
    }
    return num
};