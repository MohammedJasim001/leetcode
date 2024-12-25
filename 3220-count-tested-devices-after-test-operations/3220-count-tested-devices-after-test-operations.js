/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function(batteryPercentages) {
      count=0
    for(i=0;i<batteryPercentages.length;i++){
        batteryPercentages[i]-=count
        if(batteryPercentages[i]>0){
            count++
        }
    }
    return count
};