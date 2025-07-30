/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
      c = []
    for(i=0;i<nums.length/2;i++){
        c.push(nums[i],nums[n])
        n++
    }
    return c
};