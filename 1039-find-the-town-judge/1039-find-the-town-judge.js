/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    trusted = []
    whoTrust = []
    for (i = 0; i < trust.length; i++) {
        whoTrust.push(trust[i][0])
        trusted.push(trust[i][1])
    }
    c = []
    for (i = 1; i <= n; i++) {
        trustCount = trusted.filter(person => person === i).length;
        if (trustCount === n - 1 && !whoTrust.includes(i)) {
            return i
        }
    }
    return -1
};