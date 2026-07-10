/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMiddleElementUnique = function (nums) {
    const middleEle = nums[(nums.length - 1) / 2]
    let middleCount = 0
    for (i = 0; i < nums.length; i++) {
        if (nums[i] == middleEle) {
            middleCount++
            if (middleCount > 1) {
                return false
            }
        }
    }
    return true
};