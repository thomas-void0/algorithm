/**
 * 从前序与中序遍历序列构造二叉树
 * @see https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 */
namespace buildTree {

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
    //首先，规律是：前序遍历的第一个数为根节点
    //根节点在中序遍历中处于中间位置，所以根节点就是中序遍历的左右子树的分界点 
    function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
        if (preorder.length === 0) return null
        if (preorder.length === 1) return new TreeNode(preorder[0])

        //找到前序遍历中的根节点
        const root = preorder[0]
        //找到根节点在中序遍历中的索引值
        const index = inorder.indexOf(root)
        //找出中序遍历中的左右子树
        const inLeft = inorder.slice(0, index)
        const inRight = inorder.slice(index + 1)
        //找出前序遍历中的左右子树
        const preLeft = preorder.slice(1, index + 1)
        const preRight = preorder.slice(index + 1)
        //创建新的节点
        const node = new TreeNode(root)
        //创建节点的左右子树
        node.left = buildTree(preLeft, inLeft)
        node.right = buildTree(preRight, inRight)
        //返回节点
        return node
    };
}