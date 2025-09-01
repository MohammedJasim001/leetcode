/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    sum = 0
    c = []
    for (i = 0; i < nums.length; i++) {
        c.push(sum + nums[i])
        sum += nums[i]
    }
    return c
};