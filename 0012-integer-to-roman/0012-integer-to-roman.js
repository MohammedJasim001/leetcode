/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    int = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    rom = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    res = ''
    for (i = 0; i < int.length; i++) {
        while (num >= int[i]) {
            res += rom[i]
            num -= int[i]
        }
    }
    return res
};