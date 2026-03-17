/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minDistinctFreqPair = function (nums) {
    const freq = {}
    for (x of nums) {
        freq[x] = (freq[x] || 0) + 1;
    }

    const unique = Object.keys(freq).map(Number).sort((a, b) => a - b);
    for (let i = 0; i < unique.length; i++) {
        for (let j = i + 1; j < unique.length; j++) {

            if (freq[unique[i]] !== freq[unique[j]]) {
                return [unique[i], unique[j]];
            }
        }
    }
    return [-1, -1]
};