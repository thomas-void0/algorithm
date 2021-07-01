/**
 * @see https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/
 * 给定一个二叉树，返回其节点值自底向上的层序遍历。（即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

例如：
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其自底向上的层序遍历为：

[
  [15,7],
  [9,20],
  [3]
]
 */
namespace levelOrderBottom{
    class TreeNode {
        val: number
        left: TreeNode | null
        right: TreeNode | null
        constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
            this.val = (val===undefined ? 0 : val)
            this.left = (left===undefined ? null : left)
            this.right = (right===undefined ? null : right)
        }
    }
  
    function levelOrderBottom(root: TreeNode | null): number[][] {
        const result: number[][] = []
        if (root) {
            //创建一个队列
            const queue: TreeNode[] = []
            queue.push(root)
            let nodeNums = 1
            let temp = []

            while (queue.length > 0) {
                const current = queue.shift()

                const left = current?.left
                const right = current?.right
                
                left && queue.push(left)
                right && queue.push(right)

                const val = current?.val
                val !== void 0 && temp.push(val)

                nodeNums--

                if (nodeNums === 0) {
                    result.push(temp)
                    temp = []
                    nodeNums = queue.length
                }
            }
        }
        return result.length > 0 ? result.reverse() : result
    };
}
