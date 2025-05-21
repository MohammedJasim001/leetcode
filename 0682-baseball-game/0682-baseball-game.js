/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    c = []
    for (i = 0; i < operations.length; i++) {
        if (operations[i] === '+') {
            c.push(c[c.length - 1] + c[c.length - 2])
        }
        else if (operations[i] === 'C') {
            c.pop()
        }
        else if (operations[i] === 'D') {
            c.push(c[c.length - 1] * 2)
        }
        else {
            c.push(Number(operations[i]))
        }
    }
    return c.reduce((acc, ele) => acc + ele, 0)
};