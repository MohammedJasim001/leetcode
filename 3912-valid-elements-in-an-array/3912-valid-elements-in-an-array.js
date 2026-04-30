/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findValidElements = function (nums) {
    const newArr = []
    for (i = 0; i < nums.length; i++) {
        const firstHalf = nums.slice(0, i)
        const secondHalf = nums.slice(i + 1, nums.length)
        const firstCheck = firstHalf.every((val) => nums[i] > val)
        const secondCheck = secondHalf.every((val) => nums[i] > val)

        if (firstCheck || secondCheck) {
            newArr.push(nums[i])
        }

    }
    return newArr
};