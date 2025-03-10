/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function(nums) {
         nums.sort()
    total = 0
    c = []
    for(i=0;i<nums.length;i++){
       for(j=nums[i][1];j>=nums[i][0];j--){
            c.push(j)
       }
    }
    return [...new Set(c)].length
};