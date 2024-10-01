/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
      s=s.split(' ')
    l=''
for(i=0;i<s.length;i++){
    l+=s[i]
    if(k-1==i){
        return l
    }
    l+=" "
}
     

};