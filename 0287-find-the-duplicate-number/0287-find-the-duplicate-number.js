/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    const freq = {}

    for (x of nums) {
        freq[x] = (freq[x] || 0) + 1
    }

    for (x in freq) {
        if (freq[x] > 1) {
            return Number(x)
        }
    }
};