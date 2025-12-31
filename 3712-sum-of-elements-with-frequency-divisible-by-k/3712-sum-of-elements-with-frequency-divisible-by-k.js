/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumDivisibleByK = function (nums, k) {
    const freq = {}
    for (i = 0; i < nums.length; i++) {
        freq[nums[i]] = freq[nums[i]] ? freq[nums[i]] + 1 : 1
    }
    sum = 0
    for (x in freq) {
        if (freq[x] % k == 0) {
            sum += freq[x] * x
        }
    }
    return sum
};