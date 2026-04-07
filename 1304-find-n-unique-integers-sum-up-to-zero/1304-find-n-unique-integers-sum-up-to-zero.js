/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
    let arr = [];
    let i = 1;
    if (n % 2 !== 0) {
        arr.push(0);
    }
    while (arr.length < n) {
        arr.push(i);
        if (arr.length < n) {
            arr.push(-i);
        }
        i++;
    }

    return arr;
};