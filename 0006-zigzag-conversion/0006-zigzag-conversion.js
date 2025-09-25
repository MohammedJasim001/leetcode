/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;
    const result = Array.from({ length: numRows }, () => [])
    let row = 0
    let goingDown = false
    for (let char of s) {
        result[row].push(char);
        if (row === 0 || row === numRows - 1) {
            goingDown = !goingDown;
        }

        row += goingDown ? 1 : -1;
    }
    return result.map((ele) => ele.join('')).join('')
};