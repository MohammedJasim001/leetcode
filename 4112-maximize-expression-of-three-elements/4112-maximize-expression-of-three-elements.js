/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeExpressionOfThree = function (nums) {
    nums.sort((a, b) => a - b)
    const max = nums[nums.length - 1]
    const secMax = nums[nums.length - 2]
    const min = nums[0]

    return max + secMax - (min)
};