/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
     freq = new Map()
    nums.forEach((ele)=>freq.set(ele, (freq.get(ele)||0)+1))
    
    even = Array.from(freq.values()).filter((ele)=>ele%2==0).reduce((acc,ele)=>acc+ele,0)
    
    return even == nums.length
};