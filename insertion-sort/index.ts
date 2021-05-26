/**
 * 插入排序是一种从序列左端开始依次对数据进行排序的算法。在排序过程中，左侧的数据
 * 陆续归位，而右侧留下的就是还未被排序的数据。插入排序的思路就是从右侧的未排序区域内
 * 取出一个数据，然后将它插入到已排序区域内合适的位置上。
 * @example
 * 输入:
 * [5,6,3,11,1,0,9]
 * 输出：
 * [0,1,3,5,6,9,11]
 */
//1.如何知道哪些数字已经排序
function insertionSort(list: number[]): number[]{
    let i = 1
    let sentry = list[0] //设置一个哨兵数字
    const sortList = [sentry]
    const len = list.length
    while (i < len - 1) {
        //放在哨兵数字右边
        if (list[i] >= sentry) {
            //倒序遍历
            const len = sortList.length - 1
            for (let j = len; j >= 0; j--){
                if (list[i] >= sortList[j]) {
                    sortList.splice(j + 1, 0, list[i])
                    break
                }
            }
          
        //放在哨兵数字左边
        } else if (list[i] < sentry) {
            //正序遍历
            const len = sortList.length - 1
            for (let j = 0; j < len;j++) {
                if (list[i] <= sortList[j]) {
                    sortList.splice(j === 0 ? 0 : j - 1, 0, list[i])
                    break
                }
            }
        }
        
        i++
    }

    return sortList
}
console.log(insertionSort([5, 6, 3, 11, 1, 0, 9]))