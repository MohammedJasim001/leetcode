/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
     morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    c = []
     for(i=0;i<words.length;i++){
    str = ''
        for(j=0;j<words[i].length;j++){
             str+=morse[words[i].charCodeAt(j)-97]
        }
        c.push(str)
     }
     unique = c.filter((ele,ind)=>c.indexOf(ele) == ind)
     return unique.length
};