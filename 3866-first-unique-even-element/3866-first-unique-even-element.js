/**
 * @param {number[]} nums
 * @return {number}
 */
var firstUniqueEven = function (nums) {
    const map = {}
    for (x of nums) {
        if (x % 2 == 0) {
            map[x] = map[x] ? map[x] + 1 : 1
        }
    }
    for (x of nums) {
        if (x % 2 == 0 && map[x] === 1) {
            return x
        }
    }
    return -1
};