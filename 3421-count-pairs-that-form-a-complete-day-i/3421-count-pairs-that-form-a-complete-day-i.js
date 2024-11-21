/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function(hours) {
        a=0
    for(i=0;i<hours.length;i++){
        for(j=0;j<hours.length;j++){
            if(i!=j&&(hours[i]+hours[j])%24==0){
                a++
                
            }
        }
    }
    return a/2
};