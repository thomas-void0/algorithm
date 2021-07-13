/**
 * 二叉树的最近公共祖先
 * @see https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
 */

namespace lowestCommonAncestor {
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
    //判断两个节点
    function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {

    };
}