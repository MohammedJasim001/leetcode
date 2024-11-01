/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function(s, k) {
         a=''
        for(i=0;i<s.length;i++){
            a+=s[(k+i)%s.length]
        }
        return a
};