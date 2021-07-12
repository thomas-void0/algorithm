/**
 * 从中序与后序遍历序列构造二叉
 * @see https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 */
namespace buildTree2 {

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
    //首先，规律是：后序遍历的最后一个数为根节点
    //根节点在中序遍历中处于中间位置，所以根节点就是中序遍历的左右子树的分界点 
    //重点就是找到根节点，然后分别找到左右子树，然后设置根节点的左右子树（因为左右子树也符合遍历规则，所以递归返回节点）
    function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
        if (postorder.length === 0) return null
        if (postorder.length === 1) return new TreeNode(postorder[0])
        //找到根节点
        const root = postorder[postorder.length - 1]
        //找到根节点在中序遍历中的索引值
        const index = inorder.indexOf(root)
        //找到左子树和右子树的中序遍历
        const inLeft = inorder.slice(0, index)
        const inRight = inorder.slice(index + 1)
        //找到左子树和右子树的后序遍历
        const postLeft = postorder.slice(0, index)
        const postRight = postorder.slice(index, postorder.length - 1)

        //创建当前节点
        const node = new TreeNode(root)
        //创建当前节点的左右子树
        node.left = buildTree(inLeft, postLeft)
        node.right = buildTree(inRight, postRight)
        //返回节点
        return node
    };
}