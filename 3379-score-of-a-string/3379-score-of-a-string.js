/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
        c=[]
    for(i=0;i<s.length-1;i++){
        c.push(s.charCodeAt(i)-s.charCodeAt(i+1)) 
        
    }
    return c.reduce((acc,ele)=>acc+Math.abs(ele),0)
};