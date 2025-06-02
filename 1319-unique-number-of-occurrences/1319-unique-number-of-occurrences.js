/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    fre = {}
    for (i = 0; i < arr.length; i++) {
        fre[arr[i]] = (fre[arr[i]] || 0) + 1
    }
    count = Object.values(fre)
    unique = new Set(count)
    return unique.size == count.length
};