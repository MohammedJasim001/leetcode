/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
        nums.sort((a,b)=>a-b)
    range = nums[nums.length-1]-nums[0]+1
      let currVal = nums[0]
      c = []
   for(i=0;i<range;i++){
       if(nums.includes(currVal)){
           currVal++
       }else{
           c.push(currVal)
           currVal ++
       }
   }
   return c
};