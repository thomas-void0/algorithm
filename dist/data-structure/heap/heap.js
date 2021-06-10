"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var MyHeap = /** @class */ (function () {
    function MyHeap(type) {
        if (type === void 0) { type = "min"; }
        this.type = type;
        this.heap = [];
    }
    //创建一个堆
    MyHeap.prototype.createHeap = function (arr) {
        var _a, _b;
        var len = arr.length;
        for (var i = Math.floor(len / 2) - 1; i >= 0; i--) {
            var index = i;
            for (var j = index * 2 + 1; j < len; j = j * 2 + 1) {
                //根据type判断是创建最大堆还是最小堆
                if (this.type === "min") {
                    if (j + 1 < len && arr[j + 1] < arr[j]) {
                        j++;
                    }
                    if (arr[index] <= arr[j]) {
                        break;
                    }
                    else {
                        _a = [arr[j], arr[index]], arr[index] = _a[0], arr[j] = _a[1];
                        index = j;
                    }
                }
                if (this.type === "max") {
                    if (j + 1 < len && arr[j + 1] > arr[j]) {
                        j++;
                    }
                    if (arr[index] >= arr[j]) {
                        break;
                    }
                    else {
                        _b = [arr[j], arr[index]], arr[index] = _b[0], arr[j] = _b[1];
                        index = j;
                    }
                }
            }
        }
        this.heap = arr;
    };
    //往堆中添加数据
    MyHeap.prototype.add = function (element) {
        var _a, _b;
        var _arr = this.heap;
        _arr.push(element);
        //重新排序
        if (_arr.length === 1)
            return _arr;
        //最后一个与最底层的父节点进行相比
        var len = _arr.length;
        var index = len - 1;
        var target = Math.floor(len / 2) - 1;
        while (target >= 0) {
            if (this.type === "min") {
                if (_arr[target] > _arr[index]) {
                    _a = [_arr[index], _arr[target]], _arr[target] = _a[0], _arr[index] = _a[1];
                    index = target; //获取交换位置后，插入的元素的element
                    target = Math.floor((index - 1) / 2); //获取到更上一级的父节点，进行对比
                }
                else {
                    break;
                }
            }
            if (this.type === "max") {
                if (_arr[target] < _arr[index]) {
                    _b = [_arr[index], _arr[target]], _arr[target] = _b[0], _arr[index] = _b[1];
                    index = target; //获取交换位置后，插入的元素的element
                    target = Math.floor((index - 1) / 2); //获取到更上一级的父节点，进行对比
                }
                else {
                    break;
                }
            }
        }
    };
    //获取数据
    MyHeap.prototype.pop = function () {
        var _arr = __spreadArrays(this.heap);
        var result = null;
        if (_arr.length > 1) {
            result = _arr[0];
            _arr[0] = _arr.pop();
            this.createHeap(_arr);
        }
        else {
            result = _arr.pop();
        }
        return result;
    };
    return MyHeap;
}());
var heap1 = new MyHeap('max');
heap1.createHeap([5, 6, 3, 11, 1, 0, 9]);
console.log(heap1.heap); //[11, 6, 9, 5, 1, 0, 3]
heap1.add(12);
console.log(heap1.heap); //[12, 11, 9, 6, 1, 0, 3, 5]
heap1.pop();
console.log(heap1.heap); //[11, 6, 9, 5, 1, 0, 3]
