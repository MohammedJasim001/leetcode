/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function(num1, num2, num3) {
        
    num1 = num1.toString()
    num2 = num2.toString()
    num3 = num3.toString()
    
    res = ""
    for ( i = 1; i <= 4; i++) {
         a = Number(num1[num1.length - i]) || 0
         b = Number(num2[num2.length - i]) || 0
         c = Number(num3[num3.length - i]) || 0

        res = Math.min(a, b, c) + res
    }

    return Number(res)
};