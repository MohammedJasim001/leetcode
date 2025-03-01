/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
        count = 0
    for(i=0;i<words.length;i++){
        for(j=i+1;j<words.length;j++){
            a = words[j].split('').reverse().join('')
            if(words[i]==a){
                count ++
            }
        }
    }
    return count
};