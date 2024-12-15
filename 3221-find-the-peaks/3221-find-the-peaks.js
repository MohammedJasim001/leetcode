/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function(mountain) {
        c=[]
    for(i=0;i<mountain.length;i++){
        if(mountain[i]>mountain[i+1]&&mountain[i]>mountain[i-1]){
            c.push(i)
        }
    }
    return c
};