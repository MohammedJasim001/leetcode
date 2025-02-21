/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
        t = ''
    for(i=0;i<words.length;i++){
        t += words[i][0]
        
    }
    return t === s
};