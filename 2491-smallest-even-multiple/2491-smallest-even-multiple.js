/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
      for(i=1;i<=n;i++){
       if(n%2!=0){
           return n*2
       }else{
           return n
       }
   }
};