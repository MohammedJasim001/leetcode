/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
        a=0
   while(n>1){
       a+=Math.floor(n/2)
       n=Math.ceil(n/2)
   }
   return a
};