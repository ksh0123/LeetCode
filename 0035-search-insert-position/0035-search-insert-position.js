/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let index = 0;
    const targetFound = () => nums.includes(target);
    if(targetFound()){
        return nums.indexOf(target);
    } else {
        for(let i = 0; i < nums.length; i++){
            if(nums[i] < target){
                index++;
                continue;
            } else if (nums[i] > target) {
                break;
            }
        }
    }
    return index;
};