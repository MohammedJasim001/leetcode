/**
 * @param {string} s
 * @return {string}
 */
var getSmallestString = function(s) {
    s=s.split('')
    for(i=1;i<s.length;i++){
        if(s[i-1]>s[i] && s[i]%2== s[i-1]%2){
            [s[i],s[i-1]]=[s[i-1],s[i]]
            break
        }
    }
    return s.join('')
};