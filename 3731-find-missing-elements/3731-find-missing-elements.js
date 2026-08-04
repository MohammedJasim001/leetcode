/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function (nums) {
    nums = nums.sort((a, b) => a - b)
    const result = []
    for (i = nums[0]; i < nums[nums.length - 1]; i++) {
        if (!nums.includes(i)) {
            result.push(i)
        }
    }
    return result
};