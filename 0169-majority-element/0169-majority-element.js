/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
         a=0
    b=''
    for(i=0;i<nums.length;i++){
        if(a==0){
            b=nums[i]
        }
        if(nums[i]===b){
            a++
        }
        else{
            a--
        }
    }
    return b
  
};