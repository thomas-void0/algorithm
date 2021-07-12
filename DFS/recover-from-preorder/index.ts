/**
 * 从先序遍历还原二叉树
 * @see https://leetcode-cn.com/problems/recover-a-tree-from-preorder-traversal/
 */
namespace recoverFromPreorder {
    //先序遍历：根节点为第一个
    //通过判断‘-’的数量，判断是第几层
    //所有节点，优先满足左子节点
    let tag = ''
    function recoverFromPreorder(traversal: string): TreeNode | null {
        //找到根节点
        const root = traversal[0]
        //找出左右子树的区间
        let str = traversal.substring(1)
        //这一层对应的连字符个数
        tag += '-'
        //创建node节点
        const node = new TreeNode(+root)
        //找出满足本层条件的字符

    };
}
