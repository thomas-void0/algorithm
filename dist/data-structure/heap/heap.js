"use strict";
var Heap = /** @class */ (function () {
    function Heap(type) {
        if (type === void 0) { type = "min"; }
        this.type = type;
        this.value = [];
    }
    Heap.prototype.create = function () {
        var length = this.value.length;
        for (var i = Math.floor((length / 2) - 1); i >= 0; i--) {
            this.ajust(i, length);
        }
    };
    Heap.prototype.ajust = function (index, length) {
        var _a;
        var array = this.value;
        for (var i = 2 * index + 1; i < length; i = 2 * i + 1) {
            if (i + 1 < length) {
                if ((this.type === "max" && array[i + 1] > array[i]) || (this.type === "min" && array[i + 1] < array[i])) {
                    i++;
                }
            }
            if ((this.type === "max" && array[index] < array[i]) || (this.type === "min" && array[index] > array[i])) {
                _a = [array[i], array[index]], array[index] = _a[0], array[i] = _a[1];
                index = i;
            }
            else {
                break;
            }
        }
    };
    Heap.prototype.add = function (num) {
        var _a;
        var array = this.value;
        array.push(num);
        if (array.length > 1) {
            var index = array.length - 1;
            var target = Math.floor((index - 1) / 2);
            while (target >= 0) {
                if ((this.type === "min" && array[index] < array[target]) || (this.type === "max" && array[index] > array[target])) {
                    _a = [array[target], array[index]], array[index] = _a[0], array[target] = _a[1];
                    index = target;
                    target = Math.floor((index - 1) / 2);
                }
                else {
                    break;
                }
            }
        }
    };
    Heap.prototype.pop = function () {
        var array = this.value;
        var result = null;
        if (array.length > 1) {
            result = array[0];
            array[0] = array.pop();
            this.ajust(0, array.length);
        }
        else if (array.length === 1) {
            return array.pop();
        }
        return result;
    };
    return Heap;
}());
// var heap = new Heap('min');
// [5, 6, 3, 11, 1, 0, 9].forEach(num => {
//     heap.add(num)
// })
// console.log(heap.value);
// console.log(heap.pop()); 
// console.log(heap.value);
var MyHeap = /** @class */ (function () {
    function MyHeap(type) {
        if (type === void 0) { type = "min"; }
        this.type = type;
        this.heap = [];
    }
    //创建一个堆
    MyHeap.prototype.createHeap = function (arr) {
        //根据type判断是创建最大堆还是最小堆
    };
    //往堆中添加数据
    MyHeap.prototype.add = function (element) {
    };
    //获取数据
    MyHeap.prototype.pop = function () {
    };
    return MyHeap;
}());
