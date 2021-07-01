/**
 * 
@see https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明：叶子节点是指没有子节点的节点。

示例 1：

输入：root = [3,9,20,null,null,15,7]
输出：2
示例 2：

输入：root = [2,null,3,null,4,null,5,null,6]
输出：5

提示：

树中节点数的范围在 [0, 105] 内
-1000 <= Node.val <= 1000
 */
namespace minDepth{
    class TreeNode {
        val: number
        left: TreeNode | null
        right: TreeNode | null
        constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
            this.val = (val===undefined ? 0 : val)
            this.left = (left===undefined ? null : left)
            this.right = (right===undefined ? null : right)
        }
    }

    //最小深度，要找到叶子节点的所在层数。即找到一个没有left也没有right的节点。
    //直接广度优先遍历，找到第一个叶子节点就结束
    function minDepth(root: TreeNode | null): number {
        let num = 0
        if (root) {
            const queue:Array<TreeNode | null> = []
            queue.push(root)
            let nodeNums = 1 //每一层需要执行的节点数
            while (queue.length > 0) {
                const currnet = queue.shift()

                const left = currnet?.left
                const right = currnet?.right

                //属于叶子节点
                if (!left && !right) {
                    num++
                    break
                }

                //其余节点加入到队列中继续查找
                left && queue.push(left)
                right && queue.push(right)

                nodeNums--

                //这一层的节点执行完毕了，路径+1
                if (nodeNums === 0) {
                    num++
                    nodeNums = queue.length //获取下一层需要执行的节点数
                }
            }
        }

        return num
    };
}
