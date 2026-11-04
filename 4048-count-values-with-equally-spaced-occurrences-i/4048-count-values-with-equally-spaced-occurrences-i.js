/**
 * @param {number[]} nums
 * @return {number}
 */
var countSpecialIntegers = function (nums) {
    const map = new Map();
    let count = 0

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.get(nums[i]).push(i);
        } else {
            map.set(nums[i], [i]);
        }
    }

    for ([val, ind] of map) {
        if (ind.length === 3) {
            [a, b, c] = ind
            if (b - a === c - b) {
                count++
            }
        }
    }
    return count
};