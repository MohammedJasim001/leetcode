/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
    arr = Array(s.split(' ').length).fill(false)
    s = s.split(' ')
    for (i = 0; i < s.length; i++) {
        arr[s[i][s[i].length - 1] - 1] = s[i].slice(0, s[i].length - 1)
    }
    return arr.join(' ')
};