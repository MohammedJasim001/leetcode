/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function (nums) {
    first_last = Math.abs(nums[0] - nums[nums.length - 1])
    res = 0
    for (i = 0; i < nums.length; i++) {
        val = Math.abs(nums[i] - nums[i + 1])
        if (val > res) {
            res = val
        }
    }
    return Math.max(first_last, res)
};