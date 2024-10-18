/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
     c=[]
    for(i=0;i<sentences.length;i++){
        c.push(sentences[i].split(' ').length)
    }
    return Math.max(...c)
};