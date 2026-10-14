/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
    let sum = 0
    for (i = 0; i < arr.length; i++) {
        let currentSum = 0
        for (j = i; j < arr.length; j++) {
            currentSum += arr[j]
            if ((i - j) % 2 == 0) {
                sum += currentSum
            }
        }
    }
    return sum
};