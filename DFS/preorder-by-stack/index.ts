/**
 * 使用栈的方式迭代输出二叉树的前序遍历
 * @see https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 */
function preorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = []

    if (root) {
        const stack = [root]
        while (stack.length) {
            const { val, left, right } = stack.pop()!
            result.push(val)

            right && stack.push(right)
            left && stack.push(left)
        }

    }

    return result
};