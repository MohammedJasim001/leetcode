/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let map = {}
    let result = 0
    for (x of s) {
        map[x] = map[x] ? map[x] + 1 : 1
    }
    for (const count of Object.values(map)) {
        result += count % 2 === 0 ? count : count - 1;
    }
    return result < s.length ? result + 1 : result;
};