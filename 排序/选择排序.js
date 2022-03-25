const arr = [1, 2, 0, 12, 5, 3]
// 选择排序, 找到最小值。比它小的就放在数组的左侧。是一种原地排序算法
function sortArray(nums) {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    let min = nums[i]
    let minIdx = i
    for (let j = 0; j < len; j++) {
      if (nums[j] > min) {
        min = nums[j]
        minIdx = j
      }
    }
    if (min !== nums[i]) {
      [nums[i], nums[minIdx]] = [nums[minIdx], nums[i]]
    }
  }
}