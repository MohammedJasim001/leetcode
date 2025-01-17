/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
     b=candyType.length/2
    a = [...new Set(candyType)]
    return b>a.length?a.length:b
};