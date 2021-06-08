class MyHeap{
    type: "min" | "max"
    heap:number[] //创建一个默认堆
    constructor(type:"min" | "max" = "min") {
        this.type = type
        this.heap = []
    }

    //创建一个堆
    createHeap(arr: number[]) {
        const len = arr.length
        for (let i = Math.floor(len / 2) - 1; i >= 0; i--){
            let index = i
            for (let j = index * 2 + 1; j < len; j = j * 2 + 1){
                //根据type判断是创建最大堆还是最小堆
                if (this.type === "min") {
                    if (j + 1 < len && arr[j + 1] < arr[j]) {
                        j++
                    }
                    if (arr[index] <= arr[j]) {
                        break
                    } else {
                        [arr[index], arr[j]] = [arr[j], arr[index]]
                        index = j
                    }
                }
                if (this.type === "max") {
                    if (j + 1 < len && arr[j + 1] > arr[j]) {
                        j++
                    }
                    if (arr[index] >= arr[j]) {
                        break
                    } else {
                        [arr[index], arr[j]] = [arr[j], arr[index]]
                        index = j
                    }
                }
            }
        }
        this.heap = arr
    }

    //往堆中添加数据
    add(element: number) {
        const _arr = this.heap
        _arr.push(element)
        //重新排序
        if (_arr.length === 1) return _arr
        //最后一个与最底层的父节点进行相比
        const len = _arr.length
        let index = len - 1
        let target = Math.floor(len / 2) - 1
        while (target >= 0){
            if (this.type === "min") {
                if (_arr[target] > _arr[index]) {
                    [_arr[target],_arr[index]] = [_arr[index],_arr[target]]
                    index = target //获取交换位置后，插入的元素的element
                    target = Math.floor((index - 1) / 2) //获取到更上一级的父节点，进行对比
                } else {
                    break
                }
            }
            if (this.type === "max") {
                if (_arr[target] < _arr[index]) {
                    [_arr[target],_arr[index]] = [_arr[index],_arr[target]]
                    index = target //获取交换位置后，插入的元素的element
                    target = Math.floor((index - 1) / 2) //获取到更上一级的父节点，进行对比
                } else {
                    break
                }
            }
        }
    }

    //获取数据
    pop() {
        const _arr = [...this.heap]
        let result = null
        if (_arr.length > 1) {
            result = _arr[0]
            _arr[0] = (_arr.pop() as number)
            this.createHeap(_arr)
        } else {
            result = _arr.pop()
        }
        return result
    }
}

var heap1 = new MyHeap('max');
heap1.createHeap([5, 6, 3, 11, 1, 0, 9])

console.log(heap1.heap);
heap1.add(12)
console.log(heap1.heap);
heap1.pop()
console.log(heap1.heap);
// console.log(heap.value);
