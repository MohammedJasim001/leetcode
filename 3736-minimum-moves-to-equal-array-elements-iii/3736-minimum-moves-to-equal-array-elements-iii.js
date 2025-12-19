/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    nums.sort((a, b) => b - a)
    count = 0
    for (i = 1; i < nums.length; i++) {
        for (j = nums[i]; j < nums[0]; j++) {
            if (j == nums[0]) {
                return
            }
            count++
        }
    }
    return count
};