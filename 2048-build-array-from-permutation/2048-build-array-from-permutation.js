/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
        c = []
    for(i=0;i<nums.length;i++){
        c.push(nums[nums[i]])
    }
    return c
};