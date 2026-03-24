/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function (nums) {
    let result = 0
    for (i = 0; i < nums.length; i++) {
        const set = new Set([nums[i]])
        for (j = i; j < nums.length; j++) {
            set.add(nums[j])
            result += set.size ** 2
        }
    }
    return result
};