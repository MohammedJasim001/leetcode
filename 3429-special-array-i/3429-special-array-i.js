/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
        c=[]
    if(nums.length==1){
        return true
    }
    for(i=0;i<nums.length-1;i++){
        c.push(nums[i]%2==0&&nums[i+1]%2!=0 || nums[i]%2!==0&&nums[i+1]%2==0) 
    }
    if(c.includes(false)){
        return false
    }
    return true
};