/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
    count = 0
    for (i = 0; i < arr.length - 2; i++) {
        for (j = i + 1; j < arr.length - 1; j++) {
            for (k = j + 1; k < arr.length; k++) {
                if (Math.abs(arr[i] - arr[j]) <= a &&
                    Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
                    count++
                }
            }
        }
    }
    return count
};