const arr = [1, 2, 0, 12, 5, 3]
// 这个函数的功能是，分治中的分
function mergeSort(arr) {
  const len = arr.length
  if (len < 2) return arr

  const mid = len / 2
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)

  const mergeSortLeft = mergeSort(left)
  const mergeSortRight = mergeSort(right)

  return merge(mergeSortLeft, mergeSortRight)
}

// 分治中的治
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