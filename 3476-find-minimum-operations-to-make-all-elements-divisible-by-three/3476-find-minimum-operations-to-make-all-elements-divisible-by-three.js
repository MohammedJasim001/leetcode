/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    count=0
    for(i=0;i<nums.length;i++){
        if((nums[i]+1)%3==0||(nums[i]-1)%3==0){
            count++
        }
    }
    return count
};