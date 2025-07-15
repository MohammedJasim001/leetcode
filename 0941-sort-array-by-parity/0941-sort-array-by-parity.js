/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    odd = nums.filter((ele) => ele % 2 !== 0)
    even = nums.filter((ele) => ele % 2 == 0)
    return even.concat(odd)
};