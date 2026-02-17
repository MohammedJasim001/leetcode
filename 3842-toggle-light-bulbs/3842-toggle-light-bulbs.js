/**
 * @param {number[]} bulbs
 * @return {number[]}
 */
var toggleLightBulbs = function (bulbs) {
    let map = {}
    const result = []
    for (i = 0; i < bulbs.length; i++) {
        map[bulbs[i]] = map[bulbs[i]] ? map[bulbs[i]] + 1 : 1
    }

    for (x in map) {
        if (map[x] % 2 !== 0) {
            result.push(Number(x))
        }
    }
    return result
};