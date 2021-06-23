/**
 * 输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。
 * 看了题目了，很像leetcode的第一题【两数之和】，但是题目中有一个明显不同的条件就是数组是有序的，可以使用使用大小指针求解，不断逼近结果，最后取得最终值。
 * 设定一个小索引left，从0开始
 * 设定一个大索引right，从array.length - 1开始
 * 判断array[left] + array[right]的值s是否符合条件
 * 符合条件 - 返回
 * 大于sum，right向左移动
 * 小于sum，left向右移动
 * 若left=right，没有符合条件的结果
 * 类似【两数之和】的解法来求解，使用map存储另已经遍历过的key，这种解法在有多个结果的情况下是有问题的，因为这样优先取得的结果是乘积较大的。例如 3,8 5,7 ，会优先取到5,7。
 */
namespace FindNumbersWithSum{
    function FindNumbersWithSum(array:number[],sum:number) {
        let left = 0
        let right = array.length - 1
        while (left < right) {
            const currentSum = array[left] + array[right]
            if (currentSum < sum) left++
            if (currentSum > sum) right--
            if (currentSum === sum) return [array[left],array[right]]
        }
        return []
    }
    console.log("test:",FindNumbersWithSum([1,2,3,4,5,6,7],6))
}