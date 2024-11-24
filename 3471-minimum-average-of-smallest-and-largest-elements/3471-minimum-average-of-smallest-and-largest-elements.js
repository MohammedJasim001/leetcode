/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
       nums.sort((a,b)=>a-b)
    c=[]
   d=nums.length/2
    for(i=0;i<d;i++){
         a=nums.shift()
        b=nums.pop()
        c.push((b+a)/2)
    }
     return Math.min(...c)
};