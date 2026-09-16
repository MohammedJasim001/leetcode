/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    freq = {}
    for (x of arr) {
        freq[x] = freq[x] ? freq[x] + 1 : 1
    }

    const keys = Object.keys(freq)
    const vals = Object.values(freq)

    result = []

    for (i = 0; i < keys.length; i++) {
        if (Number(keys[i]) == vals[i]) {
            result.push(Number(keys[i]))
        }
    }

    return result.length > 0 ? Math.max(...result) : -1
};