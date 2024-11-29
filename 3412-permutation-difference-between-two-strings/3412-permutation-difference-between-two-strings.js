/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
        sum=0
    for(i=0;i<s.length;i++){
        for(j=0;j<t.length;j++){
            if(s[i]==t[j]){
                sum+=Math.abs(i-j)
            }
        }
    }
    return sum
};