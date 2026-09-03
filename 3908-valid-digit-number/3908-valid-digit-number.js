/**
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var validDigit = function (n, x) {
    let valid = false

    while (n > 0) {
        const last = n % 10
        if (last === x) {
            valid = true
        }
        if (n <= 9 && last === x) {
            valid = false
        }
        n = Math.floor(n / 10)
    }
    return valid
};