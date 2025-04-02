/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function (s) {
    while (s.length > 2) {
        a = ''
        for (i = 0; i < s.length - 1; i++) {
            a += (Number(s[i]) + Number(s[i + 1])) % 10
        }
        s = a

    }
    return s[0] == s[1]
};