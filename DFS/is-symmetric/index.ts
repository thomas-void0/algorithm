/**
 * 对称二叉树
 * @see https://leetcode-cn.com/problems/symmetric-tree/
 */
namespace isSymmetric {
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
    //求解两颗二叉树是不是对称的，这里就是看树的left和right是否相同。
    //使用深度优先遍历的方式，递归查找树的左右节点的值

    //分别设置2个指针，遍历比较不同位置的值
    function check(p: TreeNode | null, q: TreeNode | null): boolean {
        if (p === null && q === null) return true
        //其中一者为null的情况
        if (p === null || q === null) return false

        //如果两者值相等的情况下
        if (p.val === q.val) {
            //分别判断2两边是否相等
            return check(p.left, q.right) && check(p.right, q.left)
        }

        return false

    }
    function isSymmetric(root: TreeNode | null): boolean {
        return check(root, root)
    };

}