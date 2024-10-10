/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    m=0
    n=0;
    count=0;
    for(i=0;i<moves.length;i++){
        if(moves[i]==='L'){
            m++;
        }else if(moves[i]==='R') {
            n++;
        } else{
            count++;
        }
    }

    return Math.abs(m-n)+count;
};