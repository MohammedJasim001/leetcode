/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
        a=0
    for(i=0;i<commands.length;i++){
        if(commands[i]=="DOWN"){
            a+=n
        }
        if(commands[i]=="RIGHT"){
            a+=1
        }
        if(commands[i]=="UP"){
            a-=n
        }
        if(commands[i]=="LEFT"){
            a-=1
        }
    }
    return a
};