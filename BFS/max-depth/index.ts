/**
给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。
 */

namespace maxDepth{
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
    
    function maxDepth(root: TreeNode | null): number {
        let num = 0 //记录下二叉树的层数即可

        if (root) {
            const queue:Array<TreeNode | null> = []
            let nodeNums = 1
            queue.push(root)

            while (queue.length > 0) {
                const current = queue.shift()

                const left = current?.left
                const right = current?.right

                left && queue.push(left)
                right && queue.push(right)

                nodeNums--

                //这一层遍历完毕，计数增加一个
                if (nodeNums === 0) {
                    num++
                    nodeNums = queue.length //记录下一层的结束阈值
                }
            }

        }

        return num
    };
}