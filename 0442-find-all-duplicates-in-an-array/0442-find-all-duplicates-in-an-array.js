/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    arr=nums.sort((a,b)=>a-b)
     c=[]
    for(i=0;i<nums.length;i++){
       if(arr[i]===arr[i+1]){
        c.push(nums[i])
       }
    }
    return c
};