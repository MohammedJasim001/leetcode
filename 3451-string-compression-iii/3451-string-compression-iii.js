/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
    count = 1
    str = ''
        for(i=0;i<word.length;i++){
            if(word[i]==word[i+1]){
                count++
            }
            if(count>9){
                str+=9+word[i]
                count = 1
            }
            if(word[i]!==word[i+1]){
                str+=count+word[i]
                count=1
            }
            
        }
        return str
};