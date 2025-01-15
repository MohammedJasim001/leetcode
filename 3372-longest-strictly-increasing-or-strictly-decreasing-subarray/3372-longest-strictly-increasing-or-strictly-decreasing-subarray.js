/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
       a=1
    b=1
    c=1
    for(i=1;i<nums.length;i++){
        if(nums[i]>nums[i-1]){
            a++
            b=1
        }
        else if(nums[i]<nums[i-1]){
            b++
            a=1
        }else{
            a=1
            b=1
        }
    c = Math.max(a,b,c)
    }
    return c
};