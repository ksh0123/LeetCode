/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {    
    let answer = BigInt(digits.join(''));
    answer++;
    return answer.toString().split('').map(x => Number(x));
};