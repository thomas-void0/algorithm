  /**
   * 
@see https://leetcode-cn.com/problems/symmetric-tree/
给定一个二叉树，检查它是否是镜像对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3
*/
namespace isSymmetric{
    class TreeNode {
        val: number
        left: TreeNode | null
        right: TreeNode | null
        constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
            this.val = (val === undefined ? 0 : val)
            this.left = (left === undefined ? null : left)
            this.right = (right === undefined ? null : right)
        }
    }

    //检测相反位置的节点值。
    function isSymmetric(root: TreeNode | null): boolean {
        const leftQueue: Array<TreeNode | null> = []
        const rightQueue: Array<TreeNode | null> = []

        leftQueue.push(root)
        rightQueue.push(root)

        while (leftQueue.length > 0 || rightQueue.length > 0) {
            const leftCurrent = leftQueue.shift()
            const rightCurrent = rightQueue.shift()

            if (
                leftCurrent?.val !== rightCurrent?.val
            ) {
                return false
            }
            
            leftCurrent?.left !== undefined && leftQueue.push(leftCurrent?.left)
            leftCurrent?.right !== undefined && leftQueue.push(leftCurrent?.right)

            rightCurrent?.right !== undefined && rightQueue.push(rightCurrent?.right)
            rightCurrent?.left !== undefined && rightQueue.push(rightCurrent?.left)
        }

        return true
    };
    
}
