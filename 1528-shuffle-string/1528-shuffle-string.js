/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
    let c = []
    for (let i = 0; i < s.length; i++) {
        c[indices[i]] = s[i]
    }
    return c.join("")
};