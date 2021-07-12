/**
 * 使用迭代的方式二叉树的中序遍历
 * @see https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 */
function inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = []
    if (root) {
        const stack: TreeNode[] = []

        while (root || stack.length) {
            //将左子节点优先入栈
            while (root) {
                stack.push(root)
                root = root.left
            }

            //此时左子节点已经全部入栈，先获取左子节点的值
            const current = stack.pop()!
            result.push(current.val)
            //取对应左子树的右边节点
            root = current.right

        }
    }

    return result
};