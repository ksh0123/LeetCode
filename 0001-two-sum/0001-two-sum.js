/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let answer = []
    for(let i = 0; i < nums.length; i++){
        let pair = target - nums[i]
        if(nums.includes(pair) && nums.indexOf(pair) !== i){
            answer.push(i)
            answer.push(nums.indexOf(pair))
            return answer
        }
    }
};