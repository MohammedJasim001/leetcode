/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
  nums1=[]
    nums2=[]
    nums=nums.sort((a,b)=>a-b)
    for(i=0;i<nums.length;i++){
        if(!nums1.includes(nums[i])&&nums1.length<=nums2.length){
            nums1.push(nums[i])
        }
        else if(!nums2.includes(nums[i])&&nums2.length<=nums1.length){
            nums2.push(nums[i])
        }
    }
    return nums2.length==nums.length/2&&nums1.length == nums.length/2
};