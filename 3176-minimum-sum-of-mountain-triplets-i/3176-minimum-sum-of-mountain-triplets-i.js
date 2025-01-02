/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function(nums) {
        c=[]
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            for(k=j+1;k<nums.length;k++){
                if( nums[i]<nums[j] && nums[k]<nums[j]){
                    c.push(nums[i]+nums[j]+nums[k])
                }
            }
               
        }
    }
    return c.length>0?Math.min(...c) : -1
};