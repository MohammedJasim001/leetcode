/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
        count = 0
    for(i=low;i<=high;i++){
        b = i.toString()

        if(b.length%2 !==0){
            continue
        } 

        c = b.slice(0,b.length/2)
        d = b.slice(b.length/2)
        
        e = d.split('').reduce((acc,ele)=>acc + Number(ele),0)
        f = c.split('').reduce((acc,ele)=>acc + Number(ele),0)
        if(e === f){
            count ++
        }
    }
    return count
};