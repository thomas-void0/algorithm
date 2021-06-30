/**
 * 
@see https://leetcode-cn.com/problems/same-tree/
给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 

示例 1：


输入：p = [1,2,3], q = [1,2,3]
输出：true
示例 2：


输入：p = [1,2], q = [1,null,2]
输出：false
示例 3：


输入：p = [1,2,1], q = [1,1,2]
输出：false
 

提示：

两棵树上的节点数目都在范围 [0, 100] 内
-104 <= Node.val <= 104
 */
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
 function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {

    //创建队列
    const pQueue: Array<TreeNode | null> = []
    const qQueue: Array<TreeNode | null> = []
    pQueue.push(p)
    qQueue.push(q)
     
    while (pQueue.length > 0 || qQueue.length > 0) {
        
        const pCurrent = pQueue.shift()
        const qCurrent = qQueue.shift()

        if (pCurrent?.val !== qCurrent?.val) return false

        pCurrent?.left !== undefined && pQueue.push(pCurrent.left)
        pCurrent?.left !== undefined && pQueue.push(pCurrent.right)

        qCurrent?.left !== undefined && qQueue.push(qCurrent.left)
        qCurrent?.left !== undefined && qQueue.push(qCurrent.right)       

    }
    
    return true
};