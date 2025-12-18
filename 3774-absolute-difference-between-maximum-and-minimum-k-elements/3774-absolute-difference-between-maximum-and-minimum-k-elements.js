/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var absDifference = function(nums, k) {
        nums.sort((a,b)=>a-b)
    const largest = nums.slice(-k).reduce((acc,ele)=>acc+ele,0)
    const smallest = nums.slice(0,k).reduce((acc,ele)=>acc+ele,0)
    return largest-smallest
};