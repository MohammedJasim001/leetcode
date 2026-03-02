/**
 * @param {string} s
 * @return {string}
 */
var trimTrailingVowels = function (s) {
    const vowels = ['a', 'i', 'o', 'u', 'e']
    for (i = s.length - 1; i >= 0; i--) {
        if (vowels.includes(s[i])) {
            s = s.slice(0, -1)
        }
        else {
            return s
        }
    }
    return s
};