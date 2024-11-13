/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    a={}
    for(x of s){
        a[x] = a[x]?a[x]+1:1
    }
    a=Object.values(a)
    c=[]
    count=0
    for(i=0;i<a.length;i++){
            b=a[i]
            while(b>2){
                count++
                b-=2
            }
            c.push(b)
    }
    return c.reduce((acc,ele)=>acc+ele,0)
};