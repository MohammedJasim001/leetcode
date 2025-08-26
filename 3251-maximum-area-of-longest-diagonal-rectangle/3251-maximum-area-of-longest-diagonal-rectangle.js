/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function (dimensions) {
    let maxArea = 0;
    let max = 0
    for (let i = 0; i < dimensions.length; i++) {
        let width = dimensions[i][0];
        let height = dimensions[i][1];
        let area = width * height;
        let square = Math.sqrt(width * width + height * height)
        if (area > maxArea && max == square || square > max) {
            maxArea = area;
            max = square
        }
    }
    return maxArea
};