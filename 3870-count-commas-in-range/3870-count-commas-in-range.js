/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function (n) {
    if (n >= 1000) {
        return n - 1000 + 1
    }

    return 0
};