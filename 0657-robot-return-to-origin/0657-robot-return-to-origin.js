/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
       l=0, d=0, u=0, r=0
    
    for(i=0;i<moves.length;i++){
        if(moves[i]=="L"){
            l++
        }
        if(moves[i]=="R"){
            r++
        }
        if(moves[i]=="U"){
            u++
        }
        if(moves[i]=="D"){
            d++
        }
    }
   return r==l&&u==d
};