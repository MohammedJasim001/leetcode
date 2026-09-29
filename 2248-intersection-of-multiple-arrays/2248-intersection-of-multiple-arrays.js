/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function (nums) {
    const flatted = nums.flat()
    const freq = {}
    let result = []

    for (x of flatted) {
        freq[x] = (freq[x] || 0) + 1
    }
    for (y in freq) {
        if (freq[y] == nums.length) {
            result.push(Number(y))
        }
    }
    return result
};