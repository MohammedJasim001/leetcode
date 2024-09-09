/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
     sum=0
    c=0
 for(i=0;i<nums.length;i++){
     sum+=nums[i]
     if(sum==0){
         c++
     }
 }
 return c
};