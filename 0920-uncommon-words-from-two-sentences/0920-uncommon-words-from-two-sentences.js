/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    splited = (s1 + ' ' + s2).split(' ')
    return splited.filter((ele) => splited.indexOf(ele) == splited.lastIndexOf(ele))
};