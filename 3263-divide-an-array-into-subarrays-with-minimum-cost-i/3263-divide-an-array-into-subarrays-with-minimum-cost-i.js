/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {
        sum = nums[0]
    nums.shift()
    nums.sort((a,b)=>a-b)
    sum+=nums[0]
    sum+=nums[1]
    return sum
};