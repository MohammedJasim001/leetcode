/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
    s = s.split(' ')
    arr = Array(s.length).fill(false)
    for (i = 0; i < s.length; i++) {
        arr[s[i][s[i].length - 1] - 1] = s[i].slice(0, s[i].length - 1)
    }
    return arr.join(' ')
};