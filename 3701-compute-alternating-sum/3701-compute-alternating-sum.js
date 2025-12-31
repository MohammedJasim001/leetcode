/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSum = function (nums) {
    result = nums[0]
    for (i = 1; i < nums.length; i++) {
        if (i % 2 == 0) {
            result += nums[i]
        } else {
            result -= nums[i]
        }
    }
    return result
};