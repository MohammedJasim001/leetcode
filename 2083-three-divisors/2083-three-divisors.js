/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    c=[]
        for(i=1;i<=n;i++){
        if(n%i==0){
            c.push(i)
            
        }
    }
    return c.length==3
    
};