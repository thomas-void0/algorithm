/**
 * @see https://leetcode-cn.com/problems/search-insert-position/
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let l = 0, r = nums.length - 1, ans = nums.length;

  while (l <= r) {
    const mid = l + Math.floor((r - l) >> 1);

    if (target > nums[mid]) {
      l = mid + 1;
    } else {
      ans = mid;
      r = mid - 1;
    }
  }

  return ans;
};
