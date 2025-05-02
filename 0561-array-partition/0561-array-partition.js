/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
        nums = nums.sort((a,b)=>a-b)
    c = 0
    for(i=0;i<nums.length;i=i+2){
        c+=nums[i]
    }
    return c
};