/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let mySet = new Set()
    nums.map(x => mySet.add(x))
    return mySet.size == nums.length ? false : true
    
};