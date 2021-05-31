//数据结构——堆
/**
 * 堆分为：1，最小堆，2，最大堆
 * 最小堆特点：子结点均大于父节点
 * 最大堆特点：子节点均小于父节点 
 */
//1，大顶堆：从第一个非叶子节点开始依次对数组中的元素进行下沉操作
// 大顶堆的特点：父节点大于子结点
// 和孩子节点的最大值max比较
// 大于max — 不需要在下沉
// 小于max — 和max交换位置 - 继续和下一层孩子节点比较，直到队列末尾
function ajustMaxHeap(array:number[], index:number, length:number) {
    for (let i = 2 * index + 1; i < length; i = 2 * i + 1) {
      if (i + 1 < length && array[i + 1] > array[i]) {
        i++;
      }
      //比假设的最大值大，那么就保持这个数字的位置不变
      if (array[index] >= array[i]) {
        break;
      } else {
        //比假设的最大值array[i]小，那么说明这个数字在下面，交换他们的位置
        [array[index], array[i]] = [array[i], array[index]];
        //设置当前的index为i,如果比最大值大的值换位置后。那么就将换了位置后的前最大值进行下一轮对比
        index = i;
      }
    }
}
/**
 * 创建一个大顶堆
 * @param arr 
 * @param length 要进行堆创建的数组数字长度
 * @returns 
 */
function createMaxHeap(arr:number[], length:number) {
  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    ajustMaxHeap(arr, i, length);
  }
  return arr;
}

//小顶堆
// 从第一个非叶子节点开始依次对数组中的元素进行下沉操作
// 和孩子节点的最小值min比较
// 小于min — 不需要在下沉
// 大于min — 和min交换位置（下沉） - 继续和下一层孩子节点比较，直到队列末尾
function ajustMinHeap(array:number[], index:number, length:number) {
  for (let i = 2 * index + 1; i < length; i = 2 * i + 1) {
    if (i + 1 < length && array[i + 1] < array[i]) {
      i++;
    }
    if (array[index] < array[i]) {
      break;
    } else {
      [array[index], array[i]] = [array[i], array[index]];
      index = i;
    }
  }
}

function createMinHeap(arr:number[], length:number) {
  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    ajustMinHeap(arr, i, length);
  }
  return arr;
}

