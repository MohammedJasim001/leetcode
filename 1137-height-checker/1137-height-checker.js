/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    count = 0
    c = [...heights]
    heights.sort((a, b) => a - b)
    for (i = 0; i < heights.length; i++) {
        if (c[i] !== heights[i]) {
            count++
        }
    }
    return count
};