/**
 * 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 * 
 * [
 *  [1 2 3],
 *  [4 5 6],
 *  [7 8 9],
 * ]
 */
namespace search2DArray{
    function search(array: number[][], target: number) {
        const coordinates = {
            x: 0,
            y: array.length - 1
        }
        //与左下角进行比较
        let currentValue = array[coordinates.y][coordinates.x]
        while (currentValue != void 0) {
            if (target > currentValue) {
                coordinates.x++
            }

            if (target < currentValue) {
                coordinates.y--
            }

            if (target === currentValue) {
                return coordinates
            }

            currentValue = array[coordinates.y][coordinates.x]
        }
    }

    //二分查找法
    function binarySearch(
        array: number[],
        target: number,
        start: number,
        end: number
    ): number {
        if (start > end) {
            return - 1
        }

        const mid = Math.floor((start + end) / 2)
        const midValue = array[mid]

        if(target === midValue) return mid

        return target > midValue
            ? binarySearch(array, target, mid + 1, end)
            : binarySearch(array, target, start, mid - 1)

    }

    function isTrue(array: number[][], target: number) {
        for (let i = 0; i < array.length; i++){
            const arr = array[i]
            const valueIdx = binarySearch(arr, target, 0, arr.length)
            if (valueIdx !== -1) {
                return {x:valueIdx,y:i}
            }
        }
      
    }

    console.log(search([[1, 2, 3], [4, 5, 6], [7, 8, 9],], 5))
    console.log(isTrue([[1, 2, 3], [4, 5, 6], [7, 8, 9],], 5))
}