/**
 * 二叉树的后序遍历
 * @see https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
 */
//1，将根节点加入到栈底部
//2，将所有左子节点加入到栈中
//3，取出最后一个左子节点的值，然后下一轮处理这个左子节点的父节点，(取不取父节点的标志是，右子节点不存在，或者右子节点已经被消费)
//4，找这个父节点的右子节点
//5，如果右子节点满足条件则进行取值
function postorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = []
    if (root) {
        let last = null
        const stack = []
        //当前运行中的节点
        let current: TreeNode | null = root
        //如果当前节点存在或者栈中还有节点待处理
        while (current || stack.length) {
            //将该节点加入栈底，同时将该节点的左子节点全部入栈
            while (current) {
                stack.push(current)
                current = current.left
            }

            //查看栈中的最后一个节点的值是否需要添加
            current = stack[stack.length - 1]
            //如果没有右子节点，或者右子节点已经被消费了。那么说明可以添加此节点的值
            if (!current.right || last === current.right) {
                //从栈中消费这个节点
                current = stack.pop()!
                result.push(current.val)
                last = current //设置上一次消费的节点为当前节点，以便上一层节点进行判断
                current = null //重置
            } else {
                //到此处，说明当前的节点，还有右子节点同时右子节点还没有被消费。那么将右子节点放到下一轮的栈中
                current = current.right
            }
        }
    }

    return result
};