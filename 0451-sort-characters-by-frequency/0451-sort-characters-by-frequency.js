/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let map = {}
    for (i = 0; i < s.length; i++) {
        map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1
    }
    let sorted = Object.entries(map).sort((a, b) => b[1] - [a[1]])
    str = ""
    for (x of sorted) {
        str += x[0].repeat(x[1])
    }
    return str
};