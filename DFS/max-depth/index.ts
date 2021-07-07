//求解二叉树最大深度
namespace maxDepth2 {
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

    function maxDepth(root: TreeNode | null): number {
        //从左右子树分别切入下去,找到两者递归后的最大值
        //这里+1的目的是，每执行一次查找就增加一次深度
        return root === null ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
    };

}