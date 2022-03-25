const arr = [1, 2, 0, 12, 5, 3]
// 插入排序：将左边的区间视为已经排序的区间。将右边没有排序的数与左边已经排好位置的数据进行对比。然后插入到左边
function sortArray(nums) {
  for (let i = 1; i < nums.length; i++) {
    for (let j = i; j > 0; j--) {
      if (nums[j] < nums[j - 1]) {
        [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]]
      } else {
        break
      }
    }
  }
}