/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    left = 0
    right = height.length - 1
    max = 0

    while (left < right) {
        currMax = Math.min(height[left], height[right]) * (right - left)
        max = Math.max(currMax, max)
        if (height[left] > height[right]) {
            right--
        }
        else {
            left++
        }
    }
    return max
};