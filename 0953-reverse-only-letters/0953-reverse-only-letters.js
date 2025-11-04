/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    const check = (letter) => letter.toLowerCase() !== letter.toUpperCase();
    let copied = s.split('').reverse().join('');
    let newStr = "";

    for (let i = 0; i < s.length; i++) {
        if (check(s[i])) {
            while (!check(copied[0])) {
                copied = copied.slice(1);
            }
            newStr += copied[0];
            copied = copied.slice(1);
        } else {
            newStr += s[i];
        }
    }

    return newStr;
};