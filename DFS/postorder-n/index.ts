/**
 * N 叉树的后序遍历
 * @see https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/
 */
//后序遍历就是，先加子节点。再加父节点
function postorder(root: Node | null): number[] {
    const result: number[] = []
    if (root) {
        //创建一个标识，指向上一个被消费的节点
        let lastResolve = null
        //创建一个栈，存储任务
        const stack = [root]
        while (stack.length) {
            //查看栈中的最后一个节点
            const current = stack[stack.length - 1]
            const { val, children } = current
            //查看此节点是否满足取值条件
            const len = children.length
            if (len === 0 || lastResolve === children[len - 1]) {
                result.push(val)
                lastResolve = current
                stack.pop() //弹出这个消费过的节点
            } else {
                //不满足取值条件,将children的节点加入到栈中下一轮继续执行
                const _len = len - 1
                for (let i = _len; i >= 0; i--) {
                    children[i] != void 0 && stack.push(children[i])
                }
            }
        }
    }

    return result
};