var sortArray = function (nums) {
  if (nums.length <= 1) {
    return nums;
  }
  const pivotIndex = Math.floor(nums.length / 2);
  const pivot = nums.splice(pivotIndex, 1)[0]; // 基准元素
  const left = [];
  const right = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  // 将3个数组拼接起来
  return sortArray(left).concat([pivot], sortArray(right));
};
