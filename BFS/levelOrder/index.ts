
/**
 * @see https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/
 * 给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。

树的序列化输入是用层序遍历，每组子节点都由 null 值分隔（参见示例）。

示例 1：

输入：root = [1,null,3,2,4,null,5,6]
输出：[[1],[3,2,4],[5,6]]

示例 2：

输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
输出：[[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]
 
提示：

树的高度不会超过 1000
树的节点总数在 [0, 10^4] 之间
 */
namespace levelOrder{

    class Node {
        val: number
        children: Node[]
        constructor(val?: number) {
            this.val = (val===undefined ? 0 : val)
            this.children = []
        }
    }

    function levelOrder(root: Node | null): number[][] {
        const result:number[][] = []

        if (root) {
            const queue:Node[] = [root]
            let temp = []
            //每一层需要处理的节点数
            let nums = 1

            while (queue.length) {
                const current = queue.shift()!
                
                const { children } = current
                //加入到队列，使每一层的每一个节点都能够被访问到
                children && children.forEach(child=>child && queue.push(child))

                temp.push(current.val)
                nums--

                //说明这一层遍历完成了
                if (nums === 0) {
                    result.push(temp)
                    temp = []
                    //获取下一层需要处理的节点数
                    nums = queue.length
                }

            }


        }

        return result
    };
}