/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    };
    const stack = [];
    const keys = Object.keys(map);
    for (let i = 0; i< s.length; i++) {
        if(keys.includes(s[i])) {
            stack.push(s[i]);
        }
        else {
            if (map[stack[stack.length-1]] === s[i]) {
                stack.pop();
            }
            else {
                return false;
            }
        }
    };      
    return !stack.length;
    
};