/**
 * @param {number[]} capacity
 * @param {number} itemSize
 * @return {number}
 */
var minimumIndex = function(capacity, itemSize) {
    const map = {}
    for(i=0;i<capacity.length;i++){
        if(capacity[i]>=itemSize){
            map[i] = capacity[i]
        }
    }
    let minValue = Infinity
    let minIndex = -1
    for(x in map){
        if(map[x]<minValue){
            minValue = map[x]
            minIndex = Number(x)
        }
    }
    return minIndex
};