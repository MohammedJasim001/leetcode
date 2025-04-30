/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    count = 0
    for (x of nums) {
        if (x.toString().split('').length % 2 == 0) {
            count++
        }
    }
    return count
};