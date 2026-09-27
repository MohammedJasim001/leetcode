/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {
    const max = Math.max(...nums)
    const min = Math.min(...nums)
    const result = (max - k) - (min + k)
    return result > 0 ? result : 0
};