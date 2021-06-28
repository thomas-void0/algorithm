/**
 * 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
 * 
 * 主要利用栈先入后出，队列先进先出的特点
 */
namespace implementStack{
    const stack1:number[] = []
    const stack2:number[] = []

    function push(node:number) {
        stack1.push(node)
    }

    function pop() {
        if ( stack2.length === 0) {
            while (stack1.length > 0) {
                stack2.push(stack1.pop()!)
            }
        }

        return stack2.pop() || null
    }

    console.log("push:", push(1))
    console.log("stack1:",stack1)
    console.log("stack2:",stack2)
    console.log("pop:", pop())
    console.log("stack1:",stack1)
    console.log("stack2:",stack2)
}