/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
      a=nums1.sort((a,b)=>a-b)
    b=nums2.sort((a,b)=>a-b)
    return b[0]-a[0]
};