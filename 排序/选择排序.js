const arr = [1, 2, 0, 12, 5, 3]
function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i]
    let idx = i
    for (let j = i + 1; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j]
        idx = j
      }
    }
    if (i !== idx) {
      [arr[i], arr[idx]] = [arr[idx], arr[i]]
    }
  }
}