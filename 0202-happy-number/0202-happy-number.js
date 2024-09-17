/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
      while(n>4){
n=n.toString().split('')

n= n.map((acc)=>Math.pow(acc,2)).reduce((acc,ele)=>acc+ele)

  }
  return n===1
};