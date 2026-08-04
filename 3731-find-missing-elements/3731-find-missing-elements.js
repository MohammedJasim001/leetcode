/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function (nums) {
    const max = Math.max(...nums)
    const min = Math.min(...nums)
    const result = []
    for (i = min; i < max; i++) {
        if (!nums.includes(i)) {
            result.push(i)
        }
    }
    return result
};