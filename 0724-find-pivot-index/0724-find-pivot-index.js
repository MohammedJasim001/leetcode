/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
        left = 0
    sum = nums.reduce((acc,ele)=>acc+ele,0)
    for(i=0;i<nums.length;i++){
        sum -= nums[i]
        if(sum === left){
            return i
        }else{
            left += nums[i]
        }
    }
    return -1
};