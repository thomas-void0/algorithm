/**
 * 求根节点到叶节点数字之和
 * @see https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/
 */
namespace sumNumbers {
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
    //递归寻找叶子节点，在寻找的过程中不断的将路径总和拼接起来。
    function sumNumbers(root: TreeNode | null): number {
        //传入节点，以及前一个值
        return add(root, 0)
    }

    function add(root: TreeNode | null, prevSum: number): number {
        //如果传入的节点是空的，那么这一轮直接返回0
        if (root === null) return 0

        //当前节点的路径值
        const sum = prevSum * 10 + root.val

        //如果当前节点已经是叶子节点了，那么直接返回
        if (root.left === null && root.right === null) return sum

        //如果还不是，那么就需要继续查找左右子树
        return add(root.left, sum) + add(root.right, sum)
    }

    //bfs的实现方法
    function sumNumbersDfs(root: TreeNode | null): number {
        if (root === null) return 0

        const queue = [root]
        //使创建队列记录当前对应节点的路径值
        const valueQueue = [root.val]
        //总的值
        let sum = 0

        while (queue.length) {
            const { left, right } = queue.shift()!
            const value = valueQueue.shift()!

            //如果当前节点为叶子节点了，那么总值加上这条路径的值
            if (left === null && right === null) sum += value;

            //如果当前节点还不是叶子节点,那么继续加入队列中
            if (left) {
                queue.push(left)
                //这样加入的话，下一次进来的队列值就能对应上当前运行的节点了
                valueQueue.push(value * 10 + left.val)
            }

            if (right) {
                queue.push(right)
                valueQueue.push(value * 10 + right.val)
            }
        }

        return sum
    }
}
