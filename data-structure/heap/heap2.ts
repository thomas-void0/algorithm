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
    sort() {
        for (let i = this.size - 1; i >= 0; i--){
            this.swap(0, i)
            this.size--
            this.maxHeapify(0)
        }
    }
}
// const maxHeap = new MaxHeap([5, 6, 3, 11, 1, 0, 9])
const maxHeap = new MaxHeap([11, 6, 9, 5, 1, 0, 3])
// maxHeap.rebuildHeap()
console.log("huhu",maxHeap.data)
maxHeap.sort()
console.log("huhu",maxHeap.data)