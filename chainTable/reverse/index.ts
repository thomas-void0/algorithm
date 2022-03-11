//反转一个链表：输入一个链表，反转链表后，输出新链表的表头。
namespace reverseChainTable {
  const chain4 = { val: 4, next: null };
  const chain3 = { val: 3, next: chain4 };
  const chain2 = { val: 2, next: chain3 };
  const chain1 = { val: 1, next: chain2 };

  const reverseList = function (head: any) {
    let currentNode = null;
    let headNode = head;
    while (head && head.next) {
      currentNode = head.next;
      head.next = currentNode.next;
      currentNode.next = headNode;
      headNode = currentNode;
    }
    return headNode;
  };

  console.log(reverseList(chain1));
}

// 冒泡排序
function sortArray(nums: number[]): number[] {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] > nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }

  return nums;
}

// 插入排序
function sortArray2(nums: number[]): number[] {
  const len = nums.length;
  for (let i = 1; i < len; i++) {
    for (let j = i; j >= 0 && nums[j - 1] > nums[j]; j--) {
      [nums[j - 1], nums[j]] = [nums[j], nums[j - 1]];
    }
  }

  return nums;
}

const sortArray3 = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let j = i;
    while (j > 0 && nums[j] < nums[j - 1]) {
      [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
      j--;
    }
  }
  return nums;
};

// 选择排序
const sortArray: IProps = (nums) => {
  const n = nums.length;
  for (let i = n - 1; i > 0; i--) {
    let maxIndex = 0;
    for (let j = 0; j <= i; j++) {
      if (nums[j] > nums[maxIndex]) maxIndex = j;
    }
    [nums[i], nums[maxIndex]] = [nums[maxIndex], nums[i]];
  }
  return nums;
};

const sortArray = (nums) => {
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    let minIdx = i;
    for (let j = i + 1; j < len; j++) {
      if (nums[minIdx] > nums[j]) {
        minIdx = j;
      }
    }

    if (minIdx !== i) [nums[minIdx], nums[i]] = [nums[i], nums[minIdx]];
  }

  return nums;
};

const sortArray = (nums: number[]) => {
  // 选取pviot
};
