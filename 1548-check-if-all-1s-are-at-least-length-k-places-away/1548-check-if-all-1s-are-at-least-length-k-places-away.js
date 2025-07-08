/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
    let prevIndex = -1;

  return nums.every((num, i) => {
    if (num === 1) {
      if (prevIndex !== -1 && i - prevIndex - 1 < k) {
        return false;
      }
      prevIndex = i;
    }
    return true;
  });
};