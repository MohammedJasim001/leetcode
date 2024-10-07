/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
     count=0
max=0;
    for( i=0;i<nums.length;i++){
        if(nums[i]==1){
            count++;
        }
        if(max<count){
            max=count;
        }
        if(nums[i]==0){
            count=0;
        }
    }
    return max;
};