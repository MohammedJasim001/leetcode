/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
    const map = {}
    for (x of s) {
        map[x] = map[x] ? map[x] + 1 : 1
    }
    result = Array.from(Object.values(map))
    for (i = 0; i < result.length - 1; i++) {
        if (result[i] != result[i + 1]) {
            return false
        }
    }
    return true
};