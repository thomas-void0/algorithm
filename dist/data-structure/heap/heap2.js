"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var MaxHeap = /** @class */ (function () {
    function MaxHeap(arr) {
        this.data = __spreadArrays(arr);
        this.size = arr.length;
    }
    //对一个二分堆进行调整
    MaxHeap.prototype.maxHeapify = function (index) {
        var maxIndex = index; //设置一个二分堆中最大值的索引值。
        if (index >= this.size)
            return; //如果当前序列中的索引值小于最大值的索引值。那么不符合执行条件直接返回。
        //获取当前执行的索引值中左结点的索引值
        var leftIndex = index * 2 + 1;
        //获取当前执行的索引值中右结点的索引值
        var rightIndex = index * 2 + 2;
        //获取这个二分堆中最大值的索引值
        if (leftIndex < this.size && this.data[leftIndex] > this.data[maxIndex]) {
            maxIndex = leftIndex;
        }
        if (rightIndex < this.size && this.data[rightIndex] > this.data[maxIndex]) {
            maxIndex = rightIndex;
        }
        //如果最大值就是原本执行的父结点，或者左右叶子结点索引值不满足序列长度。那么直接返回
        if (maxIndex === index) {
            return;
        }
        //交换分结点的位置
        this.swap(maxIndex, index);
        //继续向下执行，此时的maxIndex就是下沉的那个结点的索引。(原本父节点的数字进行下一轮的对比)
        return this.maxHeapify(maxIndex);
    };
    //构建最大堆
    MaxHeap.prototype.rebuildHeap = function () {
        //获取到叶子结点的开始
        var LIndex = Math.floor(this.size / 2);
        //以所有的非叶子结点开始进行构建，所有的非叶子结点都有自己的叶子结点。所以通过遍历构建去寻找他们的左右叶子结点
        for (var i = LIndex - 1; i >= 0; i--) {
            this.maxHeapify(i);
        }
    };
    //交换两个索引值之间的位置
    MaxHeap.prototype.swap = function (firstIndex, secondIndex) {
        var _a;
        _a = [this.data[secondIndex], this.data[firstIndex]], this.data[firstIndex] = _a[0], this.data[secondIndex] = _a[1];
    };
    //一个排序的函数，将数组从小到大进行排序
    //这里找出依据的是，大顶堆的根结点。一定是最大值。不断的构建大顶堆，并且缩短比较的序列长度。那么最后所有的数字都能够从大到小进行排列
    MaxHeap.prototype.sort = function () {
        for (var i = this.size - 1; i >= 0; i--) {
            this.swap(0, i); //最大的值一定是根结点，将当前的最大值往后排.
            this.size--; //缩短遍历的序列长度，已经排序的就无须再排
            this.maxHeapify(0); //对不断缩小的序列进行堆平衡
        }
    };
    return MaxHeap;
}());
// const maxHeap = new MaxHeap([5, 6, 3, 11, 1, 0, 9])
var maxHeap = new MaxHeap([11, 6, 9, 5, 1, 0, 3]);
// maxHeap.rebuildHeap()
console.log("huhu", maxHeap.data);
maxHeap.sort();
console.log("huhu", maxHeap.data);
