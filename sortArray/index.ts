/**
 * 输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
 * 例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。
 * 
 * 思路
 * 定义一种新的排序规则，将整个数组重新排序：
 * a和b两个数字可以有两种组合：ab和ba，若ab<ba则ab应该排在ba前面，否则ab应该排在ba后面。
 * 使用数组的sort方法，底层是快排，也可以手写一个快排。
 * sort方法接收一个比较函数，compareFunction：如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前；
 */
namespace sortArray{
    function sortArray(numbers:number[] = []) {
        if(numbers.length === 0) return ''
        return numbers.sort(compare).join("")
    }

    function compare(a:number,b:number):number {
        const front = '' + a + b
        const behind = '' + b + a
        return  Number(front) - Number(behind)
    }
    console.log("---->",sortArray([3,32,321]))
}