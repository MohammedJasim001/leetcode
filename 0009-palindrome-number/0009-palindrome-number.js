/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
       b= x.toString()
    c=''
     for(i=b.length-1;i>=0;i--){
         c+=b[i]
     }
     return c==b
};