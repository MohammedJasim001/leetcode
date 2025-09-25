/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;
    const result = Array.from({ length: numRows }, () => [])
    let row = 0
    let down = false
    for (let char of s) {
        result[row].push(char);
        if (row === 0 || row === numRows - 1) {
            down = !down;
        }

        row += down ? 1 : -1;
    }
    return result.map((ele) => ele.join('')).join('')
};