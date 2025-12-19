/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    max = Math.max(...nums)
    count = 0
    for (i = 0; i < nums.length; i++) {
        for (j = nums[i]; j < max; j++) {
            if (j == max) {
                return
            }
            count++
        }
    }
    return count
};