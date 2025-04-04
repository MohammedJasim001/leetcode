/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function (num) {
    a = num.toString().split('').sort((a, b) => a - b)
    even = ''
    odd = ''
    for (i = 0; i < a.length; i++) {
        if (i % 2 == 0) {
            even += a[i]
        } else {
            odd += a[i]
        }
    }
    return parseInt(even) + parseInt(odd)
};