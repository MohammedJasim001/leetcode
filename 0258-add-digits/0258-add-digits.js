/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while(num>=10){
        num=num.toString().split('').reduce((acc,ele)=>acc+parseInt(ele),0)
    }
    return num

};