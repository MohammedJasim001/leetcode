/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
        c=''
     nums.sort((a,b)=>a-b)
     if(nums[0]!==0){
        return 0
     }
    for(i=0;i<nums.length-1;i++){
        if(nums[i+1]-nums[i]!=1){
            c+=nums[i]+1
        } 
        
    }
    if(c==''&&nums[nums.length-1]<nums.length){
        c+=nums[nums.length-1]+1
    }
    return Number(c)
};