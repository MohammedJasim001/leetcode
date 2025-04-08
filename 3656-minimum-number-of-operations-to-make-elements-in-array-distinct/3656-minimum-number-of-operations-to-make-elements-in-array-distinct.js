/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    count = 0
  map = new Map()
    for(i=0;i<nums.length;i++){
        if(map[nums[i]]==undefined){
            map[nums[i]]=1
        }
        else{
            nums.splice(0,3)
            map = {}
            count++
            i = -1
        }
    }
    return count
};