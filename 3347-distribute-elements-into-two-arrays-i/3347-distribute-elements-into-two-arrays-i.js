/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function(nums) {
        a=[nums[0]]
    b=[nums[1]]
    
    for(i=2;i<nums.length;i++){
        if(a[a.length-1]>b[b.length-1]){
            a.push(nums[i])
        }else{
            b.push(nums[i])
        }
    }
    return a.concat(b)
};