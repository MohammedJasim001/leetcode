/**
 * @param {number[]} nums
 * @return {number[]}
 */
var lastVisitedIntegers = function(nums) {
       seen=[]
    ans = []
    k=0
   for(i=0;i<nums.length;i++){
      if(nums[i]>0){
          k=0
          seen.unshift(nums[i])
      }else{
          k++
          if(k<=seen.length){
              ans.push(seen[k-1])
          }else{
              ans.push(-1)
          }
      }
       
   }
   return ans
};