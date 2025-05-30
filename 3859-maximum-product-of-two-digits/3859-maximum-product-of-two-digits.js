/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function (n) {
    a = n.toString().split('')
    max = 0
    for (i = 0; i < a.length; i++) {
        for (j = i + 1; j < a.length; j++) {
            if (a[i] * a[j] > max) {
                max = a[i] * a[j]
            }
        }
    }
    return max

};