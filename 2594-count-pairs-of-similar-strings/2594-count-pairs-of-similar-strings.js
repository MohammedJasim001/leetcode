/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
      unique = []
    for(i=0;i<words.length;i++){
        unique.push([...new Set(words[i])]) 
    }
    count = 0
    for(j=0;j<unique.length;j++){
        for(k=j+1;k<unique.length;k++){
             if (unique[j].sort().join("") === unique[k].sort().join("")) { 
                count++;
            }
        }
    }
    return count
};