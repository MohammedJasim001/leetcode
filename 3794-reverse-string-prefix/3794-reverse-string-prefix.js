/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function (s, k) {
    reversed = s.slice(0, k).split('').reverse().join('')
    last = s.slice(k, s.length)
    return reversed + last
};