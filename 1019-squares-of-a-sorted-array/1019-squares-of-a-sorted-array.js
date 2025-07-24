/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    c = []
    for (i = 0; i < nums.length; i++) {
        c.push(nums[i] * nums[i])
    }
    return c.sort((a, b) => a - b)
};