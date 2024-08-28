/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    a=[]
    for(i in words){
        if(words[i].includes(x)){
            a.push(i)
        }
    }
    return a
};