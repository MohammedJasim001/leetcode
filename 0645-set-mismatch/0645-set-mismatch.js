/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    nums.sort((a, b) => a - b)
    dup = 0
    miss = 0
    for (i = 0; i < nums.length - 1; i++) {
        if (nums[i] == nums[i + 1]) {
            dup = nums[i]
            nums.splice(nums[i], 1)
            break
        }
    }

    for (i = 0; i < nums.length + 1; i++) {
        if (i + 1 !== nums[i]) {
            miss = i + 1
            break
        }
    }

    return [dup, miss]
};