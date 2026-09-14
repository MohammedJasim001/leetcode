/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    newArr = []
    for (i = 0; i < arr.length; i++) {
        const result = fn(arr[i], i)
        if (result) {
            newArr.push(arr[i])
        }
    }
    return newArr
};