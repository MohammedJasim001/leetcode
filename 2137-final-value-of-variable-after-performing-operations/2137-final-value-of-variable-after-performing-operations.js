/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
       a=0
    for(i=0;i<operations.length;i++){
        if(operations[i]=='++X'||operations[i]=='X++'){
            a+=1
        }
        else{
            a-=1
        }
    }
    return a
};