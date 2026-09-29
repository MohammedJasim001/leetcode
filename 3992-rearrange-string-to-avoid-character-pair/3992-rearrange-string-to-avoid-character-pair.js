/**
 * @param {string} s
 * @param {character} x
 * @param {character} y
 * @return {string}
 */
var rearrangeString = function (s, x, y) {
    let xString = ""
    let yString = ""
    for (i = 0; i < s.length; i++) {
        if (s[i] == x) {
            xString += s[i]
        } else {
            yString += s[i]
        }
    }
    return yString + xString
};