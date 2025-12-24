/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function (n) {
    const reversed = n.toString().split('').reverse().join('')
    return Math.abs(reversed - n)
};