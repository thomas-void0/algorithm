const arr = [1, 2, 0, 12, 5, 3]
// 归并排序，和快速排序类似，就是使用分治的思想，先对数组进行拆分，然后对比左右进行合并
function sortArray(nums) {
  const len = nums.length;
  if (len < 2) return nums;

  // 拆分数组
  const middle = Math.floor(len / 2)
  const left = nums.slice(0, middle)
  const right = nums.slice(middle)

  return merge(sortArray(left), sortArray(right))
}

function merge(left, right) {
  const result = []

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  while (left.length) result.push(left.shift())
  while (right.length) result.push(right.shift())

  return result
}