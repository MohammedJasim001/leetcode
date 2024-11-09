/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
        a=0
    b=0
    for(i=0;i<num.length;i++){
        if(i%2==0){
            a+=parseInt(num[i])
        }
        else{
            b+=parseInt(num[i])
        }
    }
    return b==a
};