/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for(i=0;i<nums.length;i++){
        flag=0
        for(j=0;j<nums.length;j++){
            if(i!=j&&nums[i]==nums[j]){
                flag=1
            }
        }
        if(flag==0){
            return nums[i]
        }
    }
};