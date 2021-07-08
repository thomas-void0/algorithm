//求解二叉树最小深度
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

    function minDepth(root: TreeNode | null): number {
        if (root === null) return 0

        //如果是叶子节点,那说明root只有一层
        const { left, right } = root
        if (!left && !right) return 1

        //创建一个深度
        let min = Infinity
        //递归左边，找到最小的深度
        left && (min = Math.min(minDepth(left), min))
        //递归右边，找到最小深度
        right && (min = Math.min(minDepth(right), min))

        //返回深度+根节点的层数
        return min + 1

    };

}