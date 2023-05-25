/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false
    let string = x + ''
    return x == string.split('').reverse().join('') ? true : false
};