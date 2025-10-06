/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    c = []
    for (i = 0; i < arr2.length; i++) {
        c.push(...arr1.filter((ele) => ele == arr2[i]))
    }
    c.push(...arr1.filter((ele) => !c.includes(ele)).sort((a,b)=>a-b))
    return c
};