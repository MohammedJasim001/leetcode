/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    const most = arr[arr.length - 1]
    c = []
    for (i = 1; i < most; i++) {
        if (!arr.includes(i)) {
            c.push(i)
        }
    }
    if (c.length) {
        if (c[k - 1]) {
            return c[k - 1]
        } else {
            return c[c.length-1] + k +1
        }
    } else {
        return most + k
    }
};