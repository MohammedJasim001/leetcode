/**
 * @param {string} s
 * @return {string}
 */
var reverseByType = function (s) {
    const regex = /[^a-zA-Z0-9\s]/g;
    const special = (s.match(regex) || []).reverse();
    const string = (s.match(/[a-zA-Z]+/g) || []).join("").split("").reverse().join("")
    let newStr = ''
    let specialIndex = 0
    let stringIndex = 0
    for (i = 0; i < s.length; i++) {
        if (special.includes(s[i])) {

            newStr += special[specialIndex]
            specialIndex++
        } else {
            newStr += string[stringIndex]
            stringIndex++
        }
    }
    return newStr

};