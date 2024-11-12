/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
var losingPlayer = function(x, y) {
        j=0
    for(i=x;i>0;i--){
        if(y>3){
            j+=1
            y=y-4
        }
    }
    return j%2==0?"Bob": "Alice"
  
    
};