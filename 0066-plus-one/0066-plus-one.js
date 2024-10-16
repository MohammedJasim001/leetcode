/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
       let a = BigInt(digits.join(""))
        let b = String(BigInt(a)+1n)
         let c = b.toString().split("").map(Number)
        
        return c
};