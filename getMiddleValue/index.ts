//求解数据流中的中位数
class Heap{
    type: "min" | "max"
    heap:number[]
    constructor(type: "min" | "max" = 'min') {
        this.type = type
        this.heap = []
    }

    //堆化
    heapify(arr: number[], index: number) {
        let parentIndex = index //父节点
        const leftIndex = index * 2 + 1 //左节点
        const rightIndex = index * 2 + 2 //右节点

        //比较3个节点的值
        if (leftIndex < arr.length) {
            (this.type === 'max' && arr[leftIndex] > arr[parentIndex]) && (parentIndex = leftIndex);
            (this.type === 'min' && arr[leftIndex] < arr[parentIndex]) && (parentIndex = leftIndex)
        }
        if (rightIndex < arr.length) {
            (this.type === 'max' && arr[rightIndex] > arr[parentIndex]) && (parentIndex = rightIndex);
            (this.type === 'min' && arr[rightIndex] < arr[parentIndex]) && (parentIndex = rightIndex)
        }

        //判断父节点的值是否有变化
        if (parentIndex === index) return
        
        //交换位置
        [arr[parentIndex], arr[index]] = [arr[index], arr[parentIndex]]
        
        //将原本的父节点放到下一轮中进行堆构建
        this.heapify(arr,parentIndex)
    }

    //创建堆
    create(arr: number[]) {
        this.heap = arr
        const LStartIndex = Math.floor(arr.length / 2)
        for (let i = LStartIndex - 1; i >= 0; i--){
            this.heapify(arr,i)
        }
    }

    //检测平衡
    isHeap() {
        const LStartIndex = Math.floor(this.heap.length / 2) 
        for (let i = LStartIndex - 1; i >= 0; i--){
            const leftValue = this.heap[i * 2 + 1] || Number.MIN_SAFE_INTEGER
            const rightValue = this.heap[i * 2 + 2] || Number.MIN_SAFE_INTEGER

            const value = this.type === 'max'
                ? Math.max(this.heap[i], leftValue, rightValue)
                : Math.min(this.heap[i], leftValue, rightValue)
            
            if(value !== this.heap[i]) return false
        }
        return true
    }

    //添加
    add(element: number) {
        this.heap.push(element);
        //检测是否需要进行上浮操作
        if (this.isHeap()) return

        //进行上浮操作
        let currentIndex = this.heap.length - 1
        //找到此数的父节点的索引值
        let parentIndex = Math.floor(currentIndex / 2) - 1
        while (parentIndex >= 0) {
            if (this.heap[parentIndex] < this.heap[currentIndex]) {
                [this.heap[parentIndex],this.heap[currentIndex]] = [this.heap[currentIndex],this.heap[parentIndex]]
                currentIndex = parentIndex
                parentIndex = Math.floor((currentIndex - 1) / 2)
            } else {
                break
            }
        }
    }

    //删除
    pop() {
       const result = this.heap.shift()
        if (this.heap.length > 1) {
            
        }
    }
}
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

