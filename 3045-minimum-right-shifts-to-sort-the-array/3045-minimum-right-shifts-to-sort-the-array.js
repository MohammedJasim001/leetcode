/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumRightShifts = function(nums) {
       count = 0
    sorted = [...nums].sort((a,b)=>a-b)
    if(JSON.stringify(nums)===JSON.stringify(sorted)){
            return 0
        }
    for(i=0;i<nums.length;i++){
        a=nums.pop()
        nums.unshift(a)
        count++
        if(JSON.stringify(nums)===JSON.stringify(sorted)){
            return count
        }
        
    }
    return -1
};