class MaxHeap{
    data:number[]
    size:number
    constructor(arr:number[]) {
        this.data = [...arr]
        this.size = arr.length
    }
    //对一个二分堆进行调整
    maxHeapify(index: number): any{
        let maxIndex = index;//设置一个二分堆中最大值的索引值。
        if (index >= this.size) return;//如果当前序列中的索引值小于最大值的索引值。那么不符合执行条件直接返回。

        //获取当前执行的索引值中左结点的索引值
        let leftIndex = index * 2 + 1
        //获取当前执行的索引值中右结点的索引值
        let rightIndex = index * 2 + 2

        //获取这个二分堆中最大值的索引值
        if (leftIndex < this.size && this.data[leftIndex] > this.data[maxIndex]) {
            maxIndex = leftIndex
        }
        if (rightIndex < this.size && this.data[rightIndex] > this.data[maxIndex]) {
            maxIndex = rightIndex
        }

        //如果最大值就是原本执行的父结点，或者左右叶子结点索引值不满足序列长度。那么直接返回
        if (maxIndex === index) {
            return
        }

        //交换分结点的位置
        this.swap(maxIndex, index)
        //继续向下执行，此时的maxIndex就是下沉的那个结点的索引。(原本父节点的数字进行下一轮的对比)
        return this.maxHeapify(maxIndex)
    }
    //构建最大堆
    rebuildHeap() {
        //获取到叶子结点的开始
        const LIndex = Math.floor(this.size / 2)
        //以所有的非叶子结点开始进行构建，所有的非叶子结点都有自己的叶子结点。所以通过遍历构建去寻找他们的左右叶子结点
        for (let i = LIndex - 1; i >= 0; i--){
            this.maxHeapify(i)
        }
    }

    //交换两个索引值之间的位置
    swap(firstIndex:number,secondIndex:number) {
        [this.data[firstIndex],this.data[secondIndex]] = [this.data[secondIndex],this.data[firstIndex]] 
    }

    //一个排序的函数，将数组从小到大进行排序
    //这里找出依据的是，大顶堆的根结点。一定是最大值。不断的构建大顶堆，并且缩短比较的序列长度。那么最后所有的数字都能够从大到小进行排列
    sort() {
        for (let i = this.size - 1; i >= 0; i--){
            this.swap(0, i) //最大的值一定是根结点，将当前的最大值往后排.
            this.size-- //缩短遍历的序列长度，已经排序的就无须再排
            this.maxHeapify(0)//对不断缩小的序列进行堆平衡
        }
    }

    //判断当前的堆是否依旧符合堆特性,
    isHeap() {
        const L = Math.floor(this.size / 2);//获取叶子结点的开始索引值
        for (let i = L - 1; i >= 0; i--) {
            const leftIndex = 2 * i + 1
            const rightIndex = 2 * i + 2
            const lValue = this.data[leftIndex] || Number.MIN_SAFE_INTEGER;
            const rValue = this.data[rightIndex] || Number.MIN_SAFE_INTEGER;
            
            //判断3个结点之间的最大值,借此判断平衡是否打破
            const max = Math.max(this.data[i], lValue, rValue);
            
            //如果不满足最大值等于父节点，那么不符合堆平衡
            if(max !== this.data[i]) return false
        }
        return true
    }
     

    //插入方法
    insert(element: number) {
        this.data.push(element)
        this.size++
        //判断是否平衡，如果平衡就无须进行处理。
        if (this.isHeap()) {
            return
        }
        //平衡被打破,重新进行堆构建
        this.rebuildHeap()
    }

    //删除方法
    delete(delIndex: number) {
        //如果索引值不符合规范，直接返回
        if (delIndex >= this.size) return
        //删除并且进行堆平衡
        const result = this.data.splice(delIndex, 1)
        this.size--
        //检测删除后的序列是否平衡
        !this.isHeap() && this.rebuildHeap() //重新构建
        return result
    }
}
// const maxHeap = new MaxHeap([5, 6, 3, 11, 1, 0, 9])
const maxHeap = new MaxHeap([11, 6, 9, 5, 1, 0, 3])
maxHeap.rebuildHeap()
console.log("heapPrev:", maxHeap.data)
maxHeap.delete(2)
console.log("heapCurrent:", maxHeap.data)

