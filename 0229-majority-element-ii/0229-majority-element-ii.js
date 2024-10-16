/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
   c={}
    a=[]
    for(x of nums){
        c[x]=c[x]?c[x]+1:1
    }
    for(x in c){
        if(c[x]>nums.length/3){
            a.push(Number(x))
        }
    }
    return a
};