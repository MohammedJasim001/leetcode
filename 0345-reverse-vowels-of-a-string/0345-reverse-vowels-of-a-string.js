/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    vowels = 'aeiouAEIOU'
    s = s.split('')
    a = []
    for (i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            a.push(s[i])
        }
    }
    a = a.reverse()


    s.join("")
    for (i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            s[i] = a.shift()
        }
    }

    return s.join('')
};