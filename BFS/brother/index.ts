/**
 * @see https://leetcode-cn.com/problems/cousins-in-binary-tree/
 * 在二叉树中，根节点位于深度 0 处，每个深度为 k 的节点的子节点位于深度 k+1 处。

如果二叉树的两个节点深度相同，但 父节点不同 ，则它们是一对堂兄弟节点。

我们给出了具有唯一值的二叉树的根节点 root ，以及树中两个不同节点的值 x 和 y 。

只有与值 x 和 y 对应的节点是堂兄弟节点时，才返回 true 。否则，返回 false。
 

示例 1：

输入：root = [1,2,3,4], x = 4, y = 3
输出：false
示例 2：

输入：root = [1,2,3,null,4,null,5], x = 5, y = 4
输出：true
示例 3：



输入：root = [1,2,3,null,4], x = 2, y = 3
输出：false
 
提示：

二叉树的节点数介于 2 到 100 之间。
每个节点的值都是唯一的、范围为 1 到 100 的整数。
 
 */
namespace brother{
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

    
    function isCousins(root: TreeNode | null, x: number, y: number): boolean {
        if (!root) return false
        
        //创建一个队列来执行节点任务,保持一个与父节点的关系
        const queue: { node: TreeNode, prev: null | TreeNode }[] = [{ node: root, prev: null }]
        //记录每一层的节点数
        let nums = 1
    
        while (queue.length > 0) {
            const current = queue.shift()!
            nums--
            const value = current.node.val

            //没有找到x或者y的情况下，继续添加下一层的节点入队
            if (value !== x && value !== y) {
                const left = current.node.left
                const right = current.node.right

                //新的任务入队
                left && queue.push({node:left,prev:current.node})
                right && queue.push({ node: right, prev: current.node })

                //如果当前层的节点数消费完了，那么获取下一层需要执行的节点数量
                if (nums === 0) nums = queue.length;

                continue
            }

            //找到了x节点或者y节点，那么就在同层进行对比
            for (let i = 0; i < nums; i++){
                const _current = queue.shift()!
                if (
                    _current.node.val === (value === y ? x : y) &&
                    _current.prev !== current.prev
                ) {
                    return true
                }
            }
            break
        }
        return false
    };
}