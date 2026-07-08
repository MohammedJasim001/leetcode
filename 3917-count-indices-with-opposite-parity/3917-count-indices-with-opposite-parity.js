/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countOppositeParity = function (nums) {
    let odd = 0
    let even = 0
    let result = []
    for (i = nums.length - 1; i >= 0; i--) {
        if (nums[i] % 2 == 0) {
            result[i] = odd
            even++
        } else {
            result[i] = even
            odd++
        }

    }
    return result
};