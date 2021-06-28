/**
 * 选择排序：就是重复“从待排序的数据中寻找最小值，将其与序列最左边的数字进行交换”
 * 这一操作的算法。在序列中寻找最小值时使用的是线性查找。
 * @example
 * 输入:
 * [5,6,3,11,1,0,9]
 * 输出：
 * [0,1,3,5,6,9,11]
 */
function selectionSort(list: number[]): number[]{
    let i = 0
    const len = list.length
    while (i < len - 1) {

        let idx = i //最小值的索引值
        let x = list[i] //最小值的值

        for (let j = i + 1; j <= len - 1; j++){
            if (x > list[j]) {
                x = list[j]
                idx = j
            }
        }

        //换位置,将找到的最小值的位置替换为当前参与查找的值
        list[idx] = list[i]
        //将当前参与查找的值替换为最小值
        list[i] = x

        i++
    }
    return list
}
console.log(selectionSort([5, 6, 3, 11, 1, 0, 9]))
