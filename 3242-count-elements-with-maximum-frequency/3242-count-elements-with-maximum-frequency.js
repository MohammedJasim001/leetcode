/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
  count= {}
c=[]
for(x of nums){
    count[x]=count[x]?count[x]+1:1
    
}
 a=0;
     b = Object.values(count).sort((a,b)=>b-a);
    for( i =0;i<b.length;i++){
        if(b[i] === b[0]){
            a+=b[i]
        }
    }
    return a
};