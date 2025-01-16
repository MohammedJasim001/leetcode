/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var zigzagTraversal = function(grid) {
       c = []
    grid.map((a,b) => {
        if(b % 2 === 0 ){
            for( i = 0; i<a.length; i++){
                if(i % 2 ===0){
                
                    c.push(a[i])
                }
            }
        } else {
            for( i = a.length - 1; i > 0; i--){
                if(i % 2 != 0){
                    c.push(a[i])
                }
            }
        }
    })
  return c
};