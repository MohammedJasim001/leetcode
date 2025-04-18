/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    a = 0
    b = 0
    for (i = 0; i < cost.length; i++) {
        temp = a
        a = Math.min(a, b) + cost[i]
        b = temp
    }
    return Math.min(a, b)
};