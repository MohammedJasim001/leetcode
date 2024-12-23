/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
 let count = 0; 

    while (true) {
        let hasDuplicate = false;

        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] === nums[j]) {
                    hasDuplicate = true;
                    break;
                }
            }
            if (hasDuplicate) break;
        }

        if (!hasDuplicate) break;

        nums.splice(0, Math.min(3, nums.length));
        count++; 
    }

    return count;
};