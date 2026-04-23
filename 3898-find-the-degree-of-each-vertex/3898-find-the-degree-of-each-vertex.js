/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function (matrix) {
    const result = []
    for (i = 0; i < matrix.length; i++) {
        const sumNested = matrix[i].reduce((acc, ele) => acc + ele, 0)
        result.push(sumNested)
    }
    return result
};