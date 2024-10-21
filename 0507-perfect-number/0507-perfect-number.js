/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
        c=0
    for (i=1;i<=num/2;i++){
        if(num%i==0){
            c+=i
        }
    }
    return c==num
};