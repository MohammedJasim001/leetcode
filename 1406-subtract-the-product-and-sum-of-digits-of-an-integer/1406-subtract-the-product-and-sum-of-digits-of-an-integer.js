/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    n=n.toString().split('')

a=n.reduce((acc,ele)=>acc+parseInt(ele),0)
b=n.reduce((acc,ele)=>acc*parseInt(ele))

return b-a


};