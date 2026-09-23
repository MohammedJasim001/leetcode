/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {

    const result = []
    for (let i = 0; i <= rowIndex; i++) {
        let sub = []
        sub.push(1)

        for (let j = 1; j < i; j++) {
            sub.push(result[i - 1][j - 1] + result[i - 1][j])
        }
        if (i > 0) {
            sub.push(1)
        }
        result.push(sub)
    }
    return result[result.length - 1]
};