/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
      nums=nums.sort((a,b)=>a-b)
    a=nums[0]
    b=nums[1]
    c=[]
    for(i=0;i<nums.length;i++){
        if(i%2==0){
            c.push(b)
            b=nums[i+3]
        }
        else{
            c.push(a)
            a=nums[i+1]
        }
        
    }
    return c
};