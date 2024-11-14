/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function(s) {
   vowels = ['a','i','o','u','e']
    a=''
     for(i=0;i<s.length;i++){
         if(vowels.includes(s[i])){
             a+=s[i]
         }
     }
     return a.length
     if(a.length==0){
         return false
     }
     return true
};