/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function (arr, m, k) {
    count = 0;

    for (i = 0; i + m < arr.length; i++) {
        if (arr[i] === arr[i + m]) {
            count++;
            if (count === m * (k - 1)) {
                return true;
            }
        } else {
            count = 0;
        }
    }

    return false;
};