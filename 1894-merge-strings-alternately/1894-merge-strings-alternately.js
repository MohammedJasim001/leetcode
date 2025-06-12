/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    max = Math.max(word1.length,word2.length)
    c = ''

    for(i=0;i<max;i++){
        if(i<word1.length) c+=word1[i]
        if(i<word2.length) c+=word2[i]
    }

    return c

};