/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
       a=[]
    for(x of magazine){
        a[x]=a[x]?a[x]+1:1
    }
    for(y of ransomNote){
       if(a[y]){
           a[y]--
       }
       else{
           return false
       }
       
    }
    return true
};