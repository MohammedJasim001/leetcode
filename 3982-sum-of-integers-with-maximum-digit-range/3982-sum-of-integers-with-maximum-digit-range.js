/**
 * @param {number[]} nums
 * @return {number}
 */
var maxDigitRange = function (nums) {
    let maxRange = 0
    let result = 0
    for (i = 0; i < nums.length; i++) {
        let num = nums[i]
        let largest = 0
        let lowest = Infinity
        let range = 0
        while (num > 0) {
            const digit = num % 10
            if (digit > largest) {
                largest = digit
            }
            if (digit < lowest) {
                lowest = digit
            }
            num = Math.floor(num / 10)
        }
        range = largest - lowest
        if (range > maxRange) {
            maxRange = range
        }
    }
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let largest = 0;
        let lowest = 9;

        while (num > 0) {
            let digit = num % 10;
            largest = Math.max(largest, digit);
            lowest = Math.min(lowest, digit);
            num = Math.floor(num / 10);
        }

        if (largest - lowest === maxRange) {
            result += nums[i];
        }
    }
    return result
}
