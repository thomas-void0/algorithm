/**
 * 判断2颗二叉树是否相同
 * @see https://leetcode-cn.com/problems/same-tree/
 */
namespace IsSameTree {
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
    //同时深度优先遍历2颗树，如果都为null，说明两者相同。如果p.val === q.val那么就对比两个节点的子节点
    function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {


        //说明2个节点都是null
        if (p === q) return true

        //说明2个节点值相同，有必要对比下一轮
        if (p?.val === q?.val) {
            //左边对左边，右边对右边
            return isSameTree(p?.left!, q?.left!) && isSameTree(p?.right!, q?.right!)
        }

        //值不相同，说明不相等。直接返回false
        return false

    };

    //bfs 解法： 创建2个队列。分别遍历队列中的值去对比。如果相同那么继续执行队列。如果不同直接返回false
    function isSameTree2(p: TreeNode | null, q: TreeNode | null): boolean {

        if (p === q) return true

        if (p === null || q === null) return false

        const pQueue = [p]
        const qQueue = [q]

        while (pQueue.length || qQueue.length) {
            const pCurrent = pQueue.shift()!
            const qCurrent = qQueue.shift()!

            if (pCurrent?.val !== qCurrent?.val) return false;

            //只要其中有一项存在，那么就继续添加队列
            if (pCurrent?.left || pCurrent?.right) {
                pQueue.push(pCurrent?.left!)
                pQueue.push(pCurrent?.right!)
            }

            if (qCurrent?.left || qCurrent?.right) {
                qQueue.push(qCurrent?.left!)
                qQueue.push(qCurrent?.right!)
            }
        }

        return true
    }

}