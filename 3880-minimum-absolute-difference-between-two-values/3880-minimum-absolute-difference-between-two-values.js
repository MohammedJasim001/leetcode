/**
 * @param {number[]} nums
 * @return {number}
 */
var minAbsoluteDifference = function (nums) {
    c = []
    for (i = 0; i < nums.length; i++) {
        for (j = 0; j < nums.length; j++) {
            if (nums[i] == 1 && nums[j] === 2) {
                c.push(Math.abs(i - j))
            }
        }
    }
    return c.length > 0 ? Math.min(...c) : -1
};