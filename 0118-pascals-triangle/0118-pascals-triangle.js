/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let result = []
    for (i = 0; i < numRows; i++) {
        let sub = []
        sub.push(1)
        for (j = 1; j < i; j++) {
            sub.push(
                result[i - 1][j - 1] + result[i - 1][j]
            );
        }
        if (i > 0) {
            sub.push(1)
        }
        result.push(sub)
    }
    return result
};