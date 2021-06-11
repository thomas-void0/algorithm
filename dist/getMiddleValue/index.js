"use strict";
//求解数据流中的中位数
var Heap = /** @class */ (function () {
    function Heap(type) {
        if (type === void 0) { type = 'min'; }
        this.type = type;
        this.heap = [];
    }
    //堆化
    Heap.prototype.heapify = function (arr, index) {
        var _a;
        var parentIndex = index; //父节点
        var leftIndex = index * 2 + 1; //左节点
        var rightIndex = index * 2 + 2; //右节点
        //比较3个节点的值
        if (leftIndex < arr.length) {
            (this.type === 'max' && arr[leftIndex] > arr[parentIndex]) && (parentIndex = leftIndex);
            (this.type === 'min' && arr[leftIndex] < arr[parentIndex]) && (parentIndex = leftIndex);
        }
        if (rightIndex < arr.length) {
            (this.type === 'max' && arr[rightIndex] > arr[parentIndex]) && (parentIndex = rightIndex);
            (this.type === 'min' && arr[rightIndex] < arr[parentIndex]) && (parentIndex = rightIndex);
        }
        //判断父节点的值是否有变化
        if (parentIndex === index)
            return;
        //交换位置
        _a = [arr[index], arr[parentIndex]], arr[parentIndex] = _a[0], arr[index] = _a[1];
        //将原本的父节点放到下一轮中再找父节点进行堆构建
        this.heapify(arr, parentIndex);
    };
    //创建堆
    Heap.prototype.create = function (arr) {
        this.heap = arr;
        var LStartIndex = Math.floor(arr.length / 2);
        for (var i = LStartIndex - 1; i >= 0; i--) {
            this.heapify(arr, i);
        }
    };
    //检测平衡
    Heap.prototype.isHeap = function () {
        var LStartIndex = Math.floor(this.heap.length / 2);
        for (var i = LStartIndex - 1; i >= 0; i--) {
            var leftValue = this.heap[i * 2 + 1] || Number.MIN_SAFE_INTEGER;
            var rightValue = this.heap[i * 2 + 2] || Number.MIN_SAFE_INTEGER;
            var value = this.type === 'max'
                ? Math.max(this.heap[i], leftValue, rightValue)
                : Math.min(this.heap[i], leftValue, rightValue);
            if (value !== this.heap[i])
                return false;
        }
        return true;
    };
    //添加
    Heap.prototype.add = function (element) {
        var _a;
        this.heap.push(element);
        //检测是否需要进行上浮操作
        if (this.isHeap())
            return;
        //进行上浮操作
        var currentIndex = this.heap.length - 1;
        //因为所有子节点的父节点之间的索引关系都满足 cosnt parentIndex = Math.floor((childIndex - 1) / 2 )
        var parentIndex = Math.floor((currentIndex - 1) / 2);
        //找到此数的父节点的索引值
        while (parentIndex >= 0) {
            if ((this.type === 'max' && this.heap[parentIndex] < this.heap[currentIndex]) ||
                (this.type === "min" && this.heap[parentIndex] > this.heap[currentIndex])) {
                _a = [this.heap[currentIndex], this.heap[parentIndex]], this.heap[parentIndex] = _a[0], this.heap[currentIndex] = _a[1];
                currentIndex = parentIndex; //当前上浮的这个数的索引值，作为下一轮对比的基数索引值
                parentIndex = Math.floor((currentIndex - 1) / 2); //找出基数的父节点索引值
            }
            else {
                //如果满足堆的平衡，直接打断循环
                break;
            }
        }
    };
    //删除
    Heap.prototype.pop = function () {
        var result = this.heap.shift();
        if (this.heap.length > 1) {
        }
    };
    return Heap;
}());
var heap = new Heap("max");
heap.create([5, 6, 3, 11, 1, 0, 9]);
console.log(heap.heap);
heap.add(33);
console.log(heap.heap);
var heap2 = new Heap("max");
heap2.create([5, 6, 3, 11, 1, 0, 9, 33]);
console.log(heap2.heap);
// let count = 0;
// function Insert(num:number) {
//     count++;
//     //奇数
//   if (count % 2 === 1) {
//     maxHeap.add(num); //最大堆添加此数值
//     minHeap.add(maxHeap.pop());//最大堆的根节点加入到最小堆中
//   } else {
//       //偶数
//     minHeap.add(num);//最小堆添加此数值
//     maxHeap.add(minHeap.pop());//最大堆添加最小堆的根节点，
//   }
// }
// //获取中位数
// function GetMedian() {
//   if (count % 2 === 1) {
//     return minHeap.value[0];
//   } else {
//     return (minHeap.value[0] + maxHeap.value[0]) / 2
//   }
// }
