/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
    let largest = -1
    let result = []
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i + 1] > largest) {
            largest = arr[i + 1]
        }
        result.unshift(largest)

    }
    return result
};