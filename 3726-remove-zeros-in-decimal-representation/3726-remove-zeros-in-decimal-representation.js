/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function (n) {
    n = n.toString()
    c = ''
    for (i = 0; i < n.length; i++) {
        if (n[i] != 0) {
            c += n[i]
        }
    }
    return Number(c)
};