/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
        a = nums.join('').split('').reduce((acc,ele)=>acc+parseInt(ele),0)
    return nums.reduce((acc,ele)=>acc+ele,0)-a
};