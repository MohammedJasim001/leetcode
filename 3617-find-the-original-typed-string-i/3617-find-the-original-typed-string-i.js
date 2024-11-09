/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    count=1
    for(i=0;i<word.length;i++){
        if(word[i]==word[i+1]){
            count++
        }
    }
    return count
};