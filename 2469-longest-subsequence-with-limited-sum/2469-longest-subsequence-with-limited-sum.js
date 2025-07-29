/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
    nums.sort((a, b) => a-b)
    c = []
    for (i = 0; i < queries.length; i++) {
        sum = 0
        count = 0
        for (j = 0; j < nums.length; j++) {
            if (nums[j] > queries[i]) {
                continue
            }
            if ((sum + nums[j]) <= queries[i]) {
                sum += nums[j]
                count++
            }
        }
        c.push(count)
    }
    return c
};