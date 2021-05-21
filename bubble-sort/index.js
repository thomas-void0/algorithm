"use strict";
/**
 * 冒泡排序：就是重复“从序列右边开始比较相邻两个数字的大小，再根据结果交换两个数字
 * 的位置”这一操作的算法
 * @example
 * 输入:
 * [5,6,3,11,1,0,9]
 * 输出：
 * [0,1,3,5,6,9,11]
 */
function bubbleSort(list) {
    var len = list.length;
    var i = len - 1;
    var times = 0;
    while (i > 0) {
        for (var j = len - 1; j > times; j--) {
            var prevValue = list[j - 1];
            var currentValue = list[j];
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
