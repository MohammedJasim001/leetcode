/**
 * @param {string} s
 * @return {number}
 */
var residuePrefixes = function (s) {
    set = new Set();
    count = 0;
    for (i = 0; i < s.length; i++) {
        set.add(s[i]);
        if (set.size === (i + 1) % 3)
            count++;
    }
    return count;
};