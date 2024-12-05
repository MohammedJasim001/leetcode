/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
        s=s.toLowerCase()
    count=0
    for(i=0;i<s.length-1;i++){
        if(s[i]!=s[i+1]){
          
            count++
        }
    }
    return count
};