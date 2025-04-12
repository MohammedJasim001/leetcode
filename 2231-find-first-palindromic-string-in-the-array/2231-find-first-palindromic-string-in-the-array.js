/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
        for(i=0;i<words.length;i++){
        a = words[i]
        b = words[i].split('').reverse().join('')
        if(a == b){
            return a
            break
        }
    }
    return ""
};