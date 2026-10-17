/**
 * @param {number} n
 * @return {boolean}
 */
var threeFibonacciSum = function (n) {
    let arr = [0, 1]
    for (i = 2; i < Infinity; i++) {
        sum = arr[i - 1] + arr[i - 2]
        if (sum + arr[i - 3] == n) {
            return true
        }
        if (sum > n) {
            break
        }
        arr.push(sum)
    }
    return false
};