/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function (arr) {
    arr = arr.sort((a, b) => a - b)
    if (arr[0] !== 1) {
        arr[0] = 1
    }
    for (i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] > 1) {
            arr[i] = arr[i - 1] + 1
        }
    }
    return Math.max(...arr)
};