//小顶堆
// 从第一个非叶子节点开始依次对数组中的元素进行下沉操作
// 和孩子节点的最小值min比较
// 小于min — 不需要在下沉
// 大于min — 和min交换位置（下沉） - 继续和下一层孩子节点比较，直到队列末尾
function ajustMinHeap(array:number[], index:number, length:number) {
    for (let i = 2 * index + 1; i < length;i = 2 * i + 1){
      if (i + 1 < length && array[i + 1] < array[i]) {
        i++
      }
      if (array[index] < array[i]) {
          break
      } else {
        [array[index], array[i]] = [array[i], array[index]]
        index = i //较大的值参加下一轮的对比
      }
    }
}
  
function createMinHeap(arr:number[], length:number) {
    for (let i = Math.floor(length / 2) - 1; i >= 0 ;i--) {
        ajustMinHeap(arr, i, length);
    }
    return arr;
}
console.log("小顶堆:", createMinHeap([5, 6, 3, 11, 1, 0, 9], 7))

//堆的插入,堆的插入要从下到上进行上浮
function add(arr: number[], element: number) {
    //添加到末尾
    arr.push(element)
    //对元素位置进行调整
    if (arr.length > 1) {
        let index = arr.length - 1 //最后一个元素
        let target = Math.floor((index - 1) / 2) //目的是找出最下层的父节点
        while (target >= 0) {
            //与找出的父节点进行对比
            if (arr[index] < arr[target]) {
                [arr[index], arr[target]] = [arr[target], arr[index]] //交换元素的位置
                index = target //获取交换位置后，插入的元素的element
                target = Math.floor((index - 1) / 2) //获取到更上一级的父节点，进行对比
            } else {
                break
            }
        }
    }
    return arr
}


//堆的插入
// 由于堆属于优先队列，只能从末尾添加
// 添加后有可能破坏堆的结构，需要从下到上进行调整
// 如果元素小于父元素，上浮

function minHeapAdd(array:number[] = [], element:number) {
    array.push(element);
    if (array.length > 1) {
      let index = array.length - 1;
      let target = Math.floor((index - 1) / 2);
        while (target >= 0) {
            if (array[index] < array[target]) {
                [array[index], array[target]] = [array[target], array[index]]
                index = target;
                target = Math.floor((index - 1) / 2);
            } else {
                break;
            }
        }
    }
    return array;
}
  
//堆的移除
//因为堆属于优先队列的关系，所以只能从头部开始移除
//移除头部后，使用末尾元素填充头部，开始头部下沉
function minHeapPop(array:number[] = []) {
    let result = null;
    if (array.length > 1) {
        result = array[0];
        array[0] = (array.pop() as number);
        ajustMinHeap(array, 0, array.length); //从第0个开始，重新进行排序
    } else if (array.length === 1) {
        return array.pop();
    }
    return result;
}


