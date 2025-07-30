/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let result = [];
    let i = 0, j = n;

    while (i < n && j < nums.length) {
        result.push(nums[i], nums[j]);
        i++;
        j++;
    }

    return result;
};