/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
    const MOD = 1000000007;
    const newArray = [];

    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += nums[j];
            newArray.push(sum);
        }
    }

    newArray.sort((a, b) => a - b);

    let result = 0;
    for (let i = left - 1; i < right; i++) {
        result = (result + newArray[i]) % MOD;
    }

    return result;
};
