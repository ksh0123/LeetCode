/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const alphanumeric = filterAlphanumeric(s)
    const reversed = reverse(alphanumeric)    
    return alphanumeric === reversed
};

const filterAlphanumeric = (s, nonAlphanumeric = new RegExp('[^a-z0-9]', 'gi')) => s.toLowerCase().replace(nonAlphanumeric, '')

const reverse = (s) => s.split('').reverse().join('')