/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
        a=0
    b=0
    for(i=0;i<nums.length;i++){
        if(nums[i]>9){
            a+=nums[i]
        }
        else{
            b+=nums[i]
        }
    }
    return b!==a
};