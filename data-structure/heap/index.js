"use strict";
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
function ajustMaxHeap(array, index) {
    var _a;
    for (var i = 2 * index + 1; i < array.length; i = 2 * i + 1) {
        if (i + 1 < array.length && array[i + 1] > array[i]) {
            i++;
        }
        if (array[index] >= [array[i]]) {
            break;
        }
        else {
            _a = [array[i], array[index]], array[index] = _a[0], array[i] = _a[1];
            index = i;
        }
    }
}
function createMaxHeap(arr) {
    var len = arr.length;
    //从中间挑选一个数字,作为开始进行创建
    for (var i = Math.floor(len / 2) - 1; i >= 0; i--) {
        ajustMaxHeap(arr, i);
    }
    return arr;
}
var head = createMaxHeap([5, 6, 3, 11, 1, 0, 9]);
