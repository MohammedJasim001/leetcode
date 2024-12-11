/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function(nums) {
        a= nums[0]+nums[1]
    count=0
    for(i=0;i<nums.length;i+=2){
        if(nums[i]+nums[i+1]==a){
            count++
        }
        else{
            break
        }
    }
    return count
};