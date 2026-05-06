/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
        let sum = 0
    let leftSum = 0
    nums.forEach((ele)=>sum+=ele)
  
  for(i=0;i<nums.length;i++){
      const rightSum = sum-leftSum-nums[i]
      if(leftSum==rightSum){
          return i
      }
      leftSum+=nums[i]
  }

  return -1
};