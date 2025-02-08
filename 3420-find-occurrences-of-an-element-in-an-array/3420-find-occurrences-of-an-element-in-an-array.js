/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @param {number} x
 * @return {number[]}
 */
var occurrencesOfElement = function(nums, queries, x) {
       occ= []
    c=[]
    for(j=0;j<nums.length;j++){
        if(nums[j]==x){
            occ.push(j)
        }
    }
    for(i=0;i<queries.length;i++){
        index = queries[i]-1
        if(queries[i] <= occ.length){
            c.push(occ[index])
        }
        else{
            c.push(-1)
        }
    }
    return c
};