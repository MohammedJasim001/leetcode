/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
     a=''
    for(x of s){
        if(x=='i'){
           c = a.split('').reverse().join('')
           a=c
        }else{
            
        a+=x
        }
    }
    return a
};