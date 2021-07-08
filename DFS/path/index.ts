/**
 * 路径总和
 * @see https://leetcode-cn.com/problems/path-sum/
 */
namespace hasPathSum {
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

    //dfs 的写法
    //求路径之后是否等于targetSum
    //深度遍历，每向下一层就减去一个值。当到叶子节点的时候，查看这个节点的值是否等于剩下来的targetSum的值
    function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
        if (root === null) return false

        const { left, right, val } = root
        //如果是叶子节点
        if (left === null && right === null) {
            return val === targetSum
        }

        //如果不是叶子节点，从左右两个节点开始往下遍历
        return hasPathSum(left, targetSum - val) || hasPathSum(right, targetSum - val)
    };

    //bfs 的写法

}
