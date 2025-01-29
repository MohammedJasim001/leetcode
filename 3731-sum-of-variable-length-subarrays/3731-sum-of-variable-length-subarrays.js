/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraySum = function(nums) {
    sum = 0
    for(i=0;i<nums.length;i++){
       start = Math.max(0,i-nums[i])
       for(j=start;j<=i;j++){
           sum += nums[j]
       }
    }
    return sum
};