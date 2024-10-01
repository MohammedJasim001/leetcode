/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
      s=s.split(' ')
    l=''
    p=0
    for (i of s){
        l+=i
        p++
        if(p==k){
            return l
        }
        l+=" "
    }
     

};