/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
       sum=0
    d=0
    c=[0]
    b=[0]
    a=[]
    for(i=0;i<nums.length-1;i++){
        sum+=nums[i]
        c.push(sum)
    }
    
    for(i=nums.length-1;i>0;i--){
        d+=nums[i]
        b.unshift(d)
    }
    
    for(i=0;i<nums.length;i++){
        a.push( Math.abs(c[i]-b[i]))
    }
    return a
};