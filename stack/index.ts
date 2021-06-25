/**
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。
 */

namespace stack{
    const minStack: number[] = [];
    
    //取最小值
    function getMin() {
        return minStack.pop()
    }

    //数据入栈
    function push(num: number) {
        const len = minStack.length
        if (len === 0) {
            minStack.push(num)
        }else if (minStack[len - 1] > num) {
            minStack.push(num)
        }
    }

    [1, 2, 3, 1, 4, 0, 5].forEach(num => push(num))
    
    console.log("test:",getMin())
}