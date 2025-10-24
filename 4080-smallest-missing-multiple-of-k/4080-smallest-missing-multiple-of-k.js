/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function (nums, k) {
    for (i = 0; i < nums.length+1; i++) {
        if (!nums.includes((i + 1) * k)) {
            return (i + 1) * k
        }

    }
};