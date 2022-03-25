// 空间复杂度更低的快速排序
var sortArray2 = function (nums) {
  if (nums.length < 2) return nums;
  return quickSort(nums, 0, nums.length - 1);
};

function quickSort(nums, left, right) {
  if (left >= right) return;
  let pivotIndex = partition(nums, left, right)
  quickSort(nums, left, pivotIndex - 1)
  quickSort(nums, pivotIndex + 1, right)
  return nums;
}

function partition(nums, left, right) {
  let pivot = right;
  let leftIndex = left;
  for (let i = left; i < right; i++) {
    if (nums[i] < nums[pivot]) {
      [nums[leftIndex], nums[i]] = [nums[i], nums[leftIndex]];
      leftIndex++;
    }
  }
  [nums[leftIndex], nums[pivot]] = [nums[pivot], nums[leftIndex]];
  return leftIndex;
}


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

