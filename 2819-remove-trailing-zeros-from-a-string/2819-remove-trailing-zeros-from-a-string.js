/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
        for(i=num.length-1;i>0;i--){
        if(num[i]==0){
           num = num.slice(0,-1)
        }
        else{
            break
        }
    }
    return num
};