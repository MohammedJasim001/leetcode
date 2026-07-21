/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
    let str = ""
    for (i = s.length - 1; i >= 0; i--) {
        if (s[i] == "#") {
            sliced = s.slice(i - 2, i)
            str = String.fromCharCode(96 + Number(sliced)) + str
            i = i - 2
        } else {
            str = String.fromCharCode(96 + Number(s[i])) + str
        }
    }
    return str
};