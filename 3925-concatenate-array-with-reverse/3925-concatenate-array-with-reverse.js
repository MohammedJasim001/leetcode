/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function (nums) {
    
    reverseNums = [...nums].reverse()
    return [...nums, ...reverseNums]
};