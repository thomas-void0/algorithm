/**
 * @see https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
// 使用快慢指针法
 var removeDuplicates = function(nums) {
    if(nums <= 0) return 0

    const len = nums.length;
    let f = 1
    let s = 1
    while(f < len){
        if(nums[f] !== nums[f - 1]){
            nums[s] = nums[f]
           ++s
        }
        ++f
    }
    return s
};

removeDuplicates([1,1,2])