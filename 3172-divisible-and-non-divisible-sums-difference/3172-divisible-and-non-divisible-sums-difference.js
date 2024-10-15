/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
       c=0
    a=0
    for(i=1;i<=n;i++){
        if(i%m===0){
            c+=i
        }
        else{
            a+=i
        }
    }
    return a-c
};