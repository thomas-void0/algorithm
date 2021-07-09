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
        //如果遍历到最后都为null了，那么直接返回true。说明之前递归的节点都满足要求
        if (p === null && q === null) return true
        //如果只有其中一个为null，那么肯定不满足要求
        if (p === null || q === null) return false

        //如果当前值相等，那么继续比较下一轮
        if (q.val === p.val) {
            return check(p.left, q.right) && check(p.right, q.left)
        }

        //如果值不想等，那么直接返回false
        return false

    }
    function isSymmetric(root: TreeNode | null): boolean {
        return check(root, root)
    };

}