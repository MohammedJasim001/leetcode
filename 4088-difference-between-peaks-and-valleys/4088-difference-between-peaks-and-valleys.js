/**
 * @param {number[]} nums
 * @return {number}
 */
var peakValleyDifference = function (nums) {
    let sum = 0
    for (i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1] && nums[i] > nums[i - 1]) {
            sum += nums[i]
        } else if (nums[i] < nums[i + 1] && nums[i] < nums[i - 1]) {
            sum -= nums[i]
        }
    }
    return sum
};