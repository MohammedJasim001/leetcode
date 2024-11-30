/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
        count=0
    for(i=0;i<nums.length;i++){
        if(nums[i]<k){
            count++
        }
    }
    return count
};