/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let answer = [];
    let sum = 0;
    nums.forEach(x => {
        sum = sum + x;
        answer.push(sum);
    })
    return answer;
};