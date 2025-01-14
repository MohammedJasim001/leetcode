/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function(nums) {
        c=[]
    for(i=0;i<nums.length;i++){
        splited = nums[i].toString().split('')
        max = Math.max(...splited)
        for(j=0;j<splited.length;j++){
            splited[j]=max
        }
        c.push(Number(splited.join('')) )
    }
    return c.reduce((acc,ele)=>acc+ele,0)
};