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

    console.log(search([[1, 2, 3], [4, 5, 6], [7, 8, 9],], 15))
}