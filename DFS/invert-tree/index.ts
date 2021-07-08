/**
 * 翻转二叉树
 * @see https://leetcode-cn.com/problems/invert-binary-tree/
 */
namespace invertTree {

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

    //翻转二叉树，只要有左右节点，那么就交换左右节点的位置。使用深度遍历的方式，先找到叶子节点，然后往上一层
    function invertTree(root: TreeNode | null): TreeNode | null {

        if (root) {
            const temp = root.left
            root.left = root.right
            root.right = temp

            root.left && invertTree(root.left)
            root.right && invertTree(root.right)
        }


        return root
    };
}
