/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
    return JSON.stringify(target.sort((a, b) => a - b)) == JSON.stringify(arr.sort((a, b) => a - b))
};