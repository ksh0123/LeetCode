/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i = nums.length-1; i >= 0; i--){
        let duplicate = nums[i-2]
        if(duplicate === nums[i]) nums.splice(i, 1);
    }
};