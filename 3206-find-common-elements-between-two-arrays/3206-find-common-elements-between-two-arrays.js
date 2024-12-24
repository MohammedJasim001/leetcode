/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    c=[]
          count=0
    for(i=0;i<nums1.length;i++){
        if(nums2.includes(nums1[i])){
            
            count++
        }
    }
    c.push(count)
    count=0
    for(j=0;j<nums2.length;j++){
        if(nums1.includes(nums2[j])){
            count++
        }
    }
    c.push(count)
    return c
};