/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
      a=0
    b=x
    while(b>0){
        a+=b%10
        b=Math.floor(b/10)
    }
    if(x%a===0){
        return a
    }
    return -1
};