/**
 * N 叉树的前序遍历
 * @see https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/
 */
function preorder(root: Node | null): number[] {
    const result: number[] = []
    if (root) {
        const stack = [root]
        while (stack.length) {
            const current = stack.pop() as any
            if (current) {
                const { val, children } = current
                const len = children.length - 1
                for (let i = len; i >= 0; i--) {
                    children[i] != void 0 && stack.push(children[i]);
                }

                result.push(val)
            }

        }
    }
    return result
};