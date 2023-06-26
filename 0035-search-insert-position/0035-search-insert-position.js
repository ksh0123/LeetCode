/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const targetFound = () => nums.includes(target);
    if(targetFound()){
        return nums.indexOf(target);
    } else {
        let index = 0;
        for(let i = 0; i < nums.length; i++){
            if(nums[i] < target){
                index++;
                continue;
            } else if (nums[i] > target) break;
        }
        return index;
    }
};