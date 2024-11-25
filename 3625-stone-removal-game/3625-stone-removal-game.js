/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function(n) {
    if(n<10){
        return false
    }
    a=n/2
    b=10
    for(i=0;i<a;i++){
        if(n>=b){
            n-=(b)
            b--
        }
    }
    return b%2!==0
};