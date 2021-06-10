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
        var _a;
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
        //如果最大值就是原本执行的分结点，那么直接返回
        if (maxIndex === index) {
            return;
        }
        //交换分结点的位置
        _a = [this.data[index], this.data[maxIndex]], this.data[maxIndex] = _a[0], this.data[index] = _a[1];
        //继续向下执行，此时的maxIndex就是下沉的那个结点的索引
        return this.maxHeapify(maxIndex);
    };
    //构建最大堆
    MaxHeap.prototype.rebuildHeap = function () {
        //获取到所有的叶子结点
        var LIndex = Math.floor(this.size / 2);
        for (var i = LIndex - 1; i >= 0; i--) {
            this.maxHeapify(i);
        }
    };
    return MaxHeap;
}());
var maxHeap = new MaxHeap([5, 6, 3, 11, 1, 0, 9]);
maxHeap.rebuildHeap();
console.log("huhu", maxHeap.data);
