/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
    let convert = ''
    for (i = 0; i < s.length; i++) {
        convert += s.charCodeAt(i) - 96
    }
    while (k > 0) {
        convert = convert.toString().split("").reduce((acc, ele) => acc + Number(ele), 0)
        k--
    }
    return Number(convert)
};