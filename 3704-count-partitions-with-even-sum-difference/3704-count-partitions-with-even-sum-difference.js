/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
       a=[...nums]
    c=[]
    count=0
    for(i=0;i<a.length-1;i++){
        c.push(a[i])
        nums.shift()
        sum1 =  nums.reduce((acc,ele)=>acc+ele,0)
        sum2 = c.reduce((acc,ele)=>acc+ele,0)
      if(Math.abs(sum2-sum1)%2==0) {
          count++
      }
    }
     return count
};