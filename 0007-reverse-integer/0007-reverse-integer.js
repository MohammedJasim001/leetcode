/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let isNegative = false
    if (x < 0) {

        x = Math.abs(x)
        isNegative = true
    }


    const reversed = x.toString().split("").reverse().join("")
    if (reversed > 2 ** 31) {
        return 0
    }
    return isNegative ? Number(reversed) * -1 : Number(reversed)
};