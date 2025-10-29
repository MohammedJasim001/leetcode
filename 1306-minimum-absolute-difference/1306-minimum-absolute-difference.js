/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
    arr.sort((a, b) => a - b)
    let minDiff = Infinity
    for (i = 1; i < arr.length; i++) {
        diff = arr[i] - arr[i - 1]
        if (diff < minDiff) {
            minDiff = diff
        }
    }
    const result = []
    for (i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] == minDiff) {
            result.push([arr[i - 1], arr[i]])
        }
    }
    return result
};