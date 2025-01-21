/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    c=[]
    for(i=0;i<nums1.length;i++){
        for(j=0;j<nums2.length;j++){
            if(nums1[i]==nums2[j]){
                greatest = false
                for(k=j+1;k<nums2.length;k++){
                    
                if(nums2[j]<nums2[k]){
                    c.push(nums2[k])
                    greatest = true
                    break
                }
                }
                if(!greatest){
                    c.push(-1)
                }
            }
        }
    }
    return c
};