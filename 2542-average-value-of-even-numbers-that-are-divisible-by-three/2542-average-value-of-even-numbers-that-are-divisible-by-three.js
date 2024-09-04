/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
      c=[]
    for(i=0;i<nums.length;i++){
       if(nums[i]%3==0&&nums[i]%2==0){
           c.push(nums[i])
           
       }
    }
    if(c.length==0){
        return 0
    }
    return Math.floor(c.reduce((acc,ele)=>acc+ele,0)/c.length)
};