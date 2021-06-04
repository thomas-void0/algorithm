/**
 * 堆排序：利用数据结构中的堆特点进行排序
 * @example
 * 输入:
 * [5,6,3,11,1,0,9]
 * 输出：
 * [0,1,3,5,6,9,11]
 */

/**
 * 堆的定义：一种图的树形结构，被用于实现优先队列.优先队列是一种数据结构，可以自由添加数据，但取出数据时要从最小值开始按顺序取出。
 * 在堆的树形结构中，各个顶点被称为结点”，数据就存储在这些结点中。
 * 特点：
 * 1. 堆中的每个结点最多有两个子结点。
 * 2. 结点的排列顺序为从上到下，同一行里则为从左到右。
 * 3. 子结点必定大于父结点。
 */
//创建一个小顶堆
function _createMinHeap(arr:number[]) {
    const len = arr.length
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--){
        let minIndex = i
        for (let j = minIndex * 2 + 1; j < len; j = j * 2 + 1){
            if (j + 1 < len && arr[j + 1] < arr[j]) {
                j++
            }
            if (arr[minIndex] <= arr[j]) {
                break
            } else {
                [arr[minIndex], arr[j]] = [arr[j], arr[minIndex]]
                minIndex = j
            }
        }
    }
    return arr
}

//创建排序函数
function heapSort(arr: number[]) {
    const sortArr = []
    const len = arr.length - 1
    for (let i = 0; i < len; i++){
        if (arr.length === 2) {
            sortArr.push(arr[0],arr[1])
        } else {
            _createMinHeap(arr)
            const min = arr.shift()
            sortArr.push(min) 
        }
    }
    return sortArr
}

console.log(heapSort([5,6,3,11,1,0,9]))