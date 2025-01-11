/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function(grid) {
        c=[]
    for(i=0;i<grid.length;i++){
        count=0
        for(j=0;j<grid[i].length;j++){
           if(grid[i][j]==1){
               count++
           }
        }
        c.push(count)
    }
    return c.indexOf(Math.max(...c))
};