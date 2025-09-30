/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = new Map()
    for (s of strs) {
        const splited = s.split('').sort().join('')
        if (!map.has(splited)) {
            map.set(splited, [])
        }
        map.get(splited).push(s)
    }
    return Array.from(map.values())
};