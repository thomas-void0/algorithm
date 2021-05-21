/**
 * 冒泡排序：就是重复“从序列右边开始比较相邻两个数字的大小，再根据结果交换两个数字
 * 的位置”这一操作的算法
 * @example
 * 输入:
 * [5,6,3,11,1,0,9]
 * 输出：
 * [0,1,3,5,6,9,11]
 */
function bubbleSort(list: number[]): number[] {
  const len = list.length;
  let i = len - 1;
  let times = 0;
  while (i > 0) {
    for (let j = len - 1; j > times; j--) {
      const prevValue = list[j - 1];
      const currentValue = list[j];

      if (prevValue !== undefined && prevValue > currentValue) {
        list[j - 1] = currentValue;
        list[j] = prevValue;
      }
    }
    i--;
    times++;
  }

  return list;
}
bubbleSort([5, 6, 3, 11, 1, 0, 9]);
