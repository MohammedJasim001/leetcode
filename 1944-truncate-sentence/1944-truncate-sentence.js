/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    s=s.split(' ')
    c=s.slice(0,k).join(' ')
    return c
};