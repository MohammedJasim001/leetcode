/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
        split = s.split(' ')
    str = ''
    for(x of split){
        str += x.split('').reverse().join('') + ' '
    }
    return str.trim()
};