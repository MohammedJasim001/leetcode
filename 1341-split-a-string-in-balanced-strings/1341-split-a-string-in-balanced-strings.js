/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    balance = 0
    count = 0
    for (i = 0; i < s.length; i++) {
        if (s[i] == 'L') {
            balance++
        } else {
            balance--
        }

        if (balance == 0) {
            count++
        }
    }
    return count
};