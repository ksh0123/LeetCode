/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let [left, right] = [0, nums.length - 1];

    while (left <= right) {
        const mid = (left + right) >> 1;
        const guess = nums[mid];

        const isTarget = guess === target;
        if (isTarget) return mid;

        const isGreater = guess < target;
        if (isGreater) left = mid + 1;

        const isLess = target < guess;
        if (isLess) right = mid - 1;
    }

    return -1;
    
};