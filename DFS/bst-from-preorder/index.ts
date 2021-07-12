/**
 * 前序遍历构造二叉搜索树
 * @see https://leetcode-cn.com/problems/construct-binary-search-tree-from-preorder-traversal/
 */
namespace bstFromPreorder {
    //二叉搜索树：left < val < right
    //前序遍历：根节点在第一个
    //1:找到根节点
    //2:找到比根节点小的，都是左子树，比根节点大的都是右子树
    function bstFromPreorder(preorder: number[]): TreeNode | null {

        if (preorder.length === 0) return null
        if (preorder.length === 1) return new TreeNode(preorder[0])

        const root = preorder[0]
        const left = []
        const right = []

        const len = preorder.length

        //根据大小区分左右子树
        for (let i = 1; i < len; i++) {
            const val = preorder[i]
            val < root ? left.push(val) : right.push(val)
        }

        //创建node节点
        const node = new TreeNode(root)
        //创建左右子树
        node.left = bstFromPreorder(left)
        node.right = bstFromPreorder(right)

        return node

    };
}
