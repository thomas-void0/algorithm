// 快速排序,
function sortArray(nums) {
  if (nums.length <= 1) return nums

  // 分区，找到基准值，拼接数组
  const middle = Math.floor(nums / 2)
  const pivot = nums.splice(middle, 1)[0]

  const left = []
  const right = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= pivot) {
      left.push(nums[i])
    } else {
      right.push(nums[i])
    }
  }

  // 连接
  return sortArray(left).concat(pivot, sortArray(right))
}
