/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
      sum=0
    for(i=0;i<=a&&b;i++){
        if(a%i==0&&b%i==0){
            sum++
        }
    }
    return sum
};