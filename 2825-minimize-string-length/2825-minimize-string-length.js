/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function (s) {
    c = ''
    for (i = 0; i < s.length; i++) {
        flag = 0
        for (j = i + 1; j < s.length; j++) {
            if (s[i] == s[j]) {
                flag = 1
            }
        }
        if (flag == 0) {
            c += s[i]
        }
    }
    return c.length
};