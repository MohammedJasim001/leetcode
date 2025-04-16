/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    for(i=0;i<nums.length;i=i+2){
        if(nums[i]!=nums[i+1]){
            return nums[i]
        }
    }
};