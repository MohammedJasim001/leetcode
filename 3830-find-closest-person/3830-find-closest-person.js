/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function (x, y, z) {
    a = Math.abs(z - x)
    b = Math.abs(z - y)

    if (a > b) {
        return 2
    } else if (b > a) {
        return 1
    } else {
        return 0
    }
};