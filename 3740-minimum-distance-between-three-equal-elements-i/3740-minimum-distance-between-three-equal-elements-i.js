/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function(nums) {
        c = []
    for(i=0;i<nums.length-2;i++){
        for(j=i+1;j<nums.length-1;j++){
            for(k=j+1;k<nums.length;k++){
                if(nums[i] === nums[j] && nums[j] === nums[k]){
                    c.push( Math.abs(i-j)+Math.abs(j-k)+Math.abs(k-i))
                }
            }
        }
    }
    return c.length==0?-1:Math.min(...c)
};