/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    arr = []
    for (i = left; i <= right; i++) {
        n = i
        number = n
        f = 0
        k = 0
        while (n > 0) {
            s = n % 10
            k++
            n = Math.floor(n / 10)
            if (number % s == 0) {
                f++
            }
        }
        if (f == k) {
            arr.push(i)
        }
    }
    return arr
};