/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
     c = []
    for (i=0;i<s.length;i++) {
       if (isNaN(s[i])) {
        c.push(s[i])
       } else {
        c.pop();
       }
    }
    return c.join('');

};