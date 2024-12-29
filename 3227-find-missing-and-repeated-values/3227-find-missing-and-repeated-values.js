/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
       c=[]
    arr = grid.flat().sort((a,b)=>a-b)
    for(i=0;i<arr.length;i++){
        if(arr.indexOf(arr[i])!==arr.lastIndexOf(arr[i])){
            c.push(arr[i])
            break
        }
    }
      unique=[...new Set(arr)]
    for( i=1;i<=arr.length;i++){
        if(!unique.includes(i)){
            c.push(i)
        }
    }
    return c
};