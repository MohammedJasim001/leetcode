/**
 * @param {number} n
 * @return {boolean}
 */
var checkGoodInteger = function (n) {
    let toArray = n.toString().split("")
    const digitSum = toArray.reduce((acc, ele) => acc + Number(ele), 0)
    const squareSum = toArray.reduce((acc, ele) => acc + Math.pow(Number(ele),2),0)
    return squareSum - digitSum >= 50
};