/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
        c= []
    for(x of nums1){
        if(nums2.includes(x)){
            c.push(x)
            i=nums2.indexOf(x)
            nums2.splice(i,1)
        }
    }
    return c

};