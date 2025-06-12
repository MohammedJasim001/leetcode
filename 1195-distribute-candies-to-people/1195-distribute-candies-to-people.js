/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
    arr = Array(num_people).fill(0)
    val = 0
    a = 1
    while (candies > 0) {
        if (num_people == val) {
            val = 0
        }
        if (a <= candies) {
            arr[val] += a
            candies -= a
        } else {
            arr[val] += candies
            candies -= candies
        }
        a++
        val++
    }
    return arr
};