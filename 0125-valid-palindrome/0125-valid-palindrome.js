/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
     a= s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
   b=a.split('').reverse().join('')
  return a===b
};