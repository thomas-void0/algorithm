/**
 @see https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

示例：
二叉树：[3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层序遍历结果：

[
  [3],
  [9,20],
  [15,7]
]
 */
namespace levelOrder{
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
  
    function levelOrder(root: TreeNode | null): number[][] {

        const result: number[][] = []
        const queue: Array<TreeNode | null> = []

        //创建一个标识符记录每一层的需要遍历的节点数量
        let nums = 1
        //创建一个数组来存储每一层的节点值
        let tempArr = []
        queue.push(root)
        while (queue.length > 0) {
            const current = queue.shift()

            const left = current?.left
            const right = current?.right

            left && queue.push(left)
            right && queue.push(right)

            current?.val !== undefined && tempArr.push(current.val)
            nums-- //添加一次，减少一个

            if (nums === 0) {
                nums = queue.length //得到下一层的节点数量
                tempArr.length > 0 && result.push(tempArr)
                tempArr = [] //重置
            }
        }

        return result
    };
}
