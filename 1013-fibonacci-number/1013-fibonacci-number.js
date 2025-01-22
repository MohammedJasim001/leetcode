/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
   c=[0,1]
   for(i=2;i<=n;i++){
    c.push(c[i-1]+c[i-2])
   }
   return c[n]
};