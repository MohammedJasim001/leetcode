/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function (nums) {
    normalNums = [...nums]
    reverseNums = [...nums.reverse()]
    return [...normalNums, ...reverseNums]
};