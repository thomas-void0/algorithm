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
        let num = Infinity //设置一个最大值，
        //从左右子树分别切入下去,找到两者递归后的最小值，如果其中有一个节点left和right都为空。记录下层数，到整棵树都遍历完成后。比较返回最小的值
        if (root === null) return 0
        const { left, right } = root
        //叶子节点
        if (left === null && right === null) return 1

        if (left) num = Math.min(num, minDepth(left))  //从左子节点找到最小值
        if (right) num = Math.min(num, minDepth(right)) //从右叶子节点找到最小值

        return num + 1
    };

}