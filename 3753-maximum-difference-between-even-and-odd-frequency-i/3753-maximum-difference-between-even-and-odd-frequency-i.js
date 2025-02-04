/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
        a={}
    c=[]
    d=[]
    for(counts of s){
        a[counts] = a[counts] ? a[counts]+1: 1
    }
    for(x in a ){
         a[x]%2 ==0 ? c.push(a[x]) : d.push(a[x])
    }
   
    return Math.max(...d) - Math.min(...c)
};