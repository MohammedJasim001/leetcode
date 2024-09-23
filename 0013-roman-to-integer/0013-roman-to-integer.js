/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    a={
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500, 
        "M":1000
    }
    c=0
    for(i=0;i<s.length;i++){
        if(a[s[i]]<a[s[i+1]]){
            c-=a[s[i]]
        }
        else{
            c+=a[s[i]]
        }
    }
    return c
};