/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
        e=0
    c=[]
    for(i=0;i<s.length;i++){
        if(s[i]=='E'){
            e++
        }
       
        else{
            e--
        }
             c.push(e)
    }
    return Math.max(...c)
};