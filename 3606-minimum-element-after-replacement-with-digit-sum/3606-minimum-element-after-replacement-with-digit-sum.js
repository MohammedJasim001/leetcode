/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
        c=[]
    for(i=0;i<nums.length;i++){
        c.push(nums[i].toString().split('').reduce((acc,ele)=>acc+parseInt(ele),0))
    }
    return Math.min(...c)
};