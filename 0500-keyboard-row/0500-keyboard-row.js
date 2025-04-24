/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
       first = 'qwertyuiop'
    second = 'asdfghjkl'
    third = 'zxcvbnm'
    
    output = []
    
    function isCorrect (row, word) {
        word = word.toLowerCase()
        for(x of word){
            if(!row.includes(x)){
                return false
            }
        }
        return true
    }
    
    for(i=0;i<words.length;i++){
        a = isCorrect(first,words[i])
        b = isCorrect(second,words[i])
        c = isCorrect(third,words[i])
        
        if(a || b || c){
            output.push(words[i])
        }
    }
    return output
};