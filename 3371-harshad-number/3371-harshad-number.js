/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
  a=x.toString().split('')
  a= a.reduce((acc,ele)=>acc+parseInt(ele),0)
  return x%a==0?a:-1
};