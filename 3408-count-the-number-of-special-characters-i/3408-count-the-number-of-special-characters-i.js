/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
        a = new Set()
    b = new Set()
    for(i=0;i<word.length;i++){
        x=word[i].toUpperCase()
        if(word[i]==x){
            a.add(word[i].toLowerCase())
        }
        else{
            b.add(word[i])
        }
    }
    count=0
    for(c of a){
        if(b.has(c)){
            count++
        }
    }
    return count
};