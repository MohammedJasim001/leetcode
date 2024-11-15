/**
 * @param {string} s
 * @return {number}
 */
var maxOperations = function(s) {
        let sum = 0;
    let c = 0;
    for (let i=s.length-1; i>=0; i--) {
        if (s[i] == '0') c++;
        while (s[i] == '0') {
            i--;
        }
        if (s[i] == '1') sum+=c;
    }

    return sum
};