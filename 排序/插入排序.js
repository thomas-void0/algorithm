const arr = [1, 2, 0, 12, 5, 3]
function sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // 将左边的区间认为已经排序完成
    for (let j = i; i > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
      } else {
        break
      }
    }
  }
}