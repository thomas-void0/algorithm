/**
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
 */
namespace RebuildBinaryTree{
    class _Node{
        data: number
        left:_Node | null
        right:_Node | null
        constructor(data: number) {
            this.data = data
            this.left = null
            this.right = null
        }
    }
    /**
     * 重建二叉树
     * @param pre 前序遍历顺序
     * @param vin 中序遍历顺序
     */
    function reConstructBinaryTree(pre:any,vin:any) {
        if(pre.length === 0){
            return null;
        }
        if(pre.length === 1){
            return new _Node(pre[0]);
        }
        
        //获取到根节点
        const root = pre[0]
        //获取根节点在中序遍历中的索引值
        const index = vin.indexOf(root)
        //获取到根节点在中序遍历中对应的左右叶子节点
        const vinLeft = vin.slice(0,index)
        const vinRight = vin.slice(index + 1)
        //获取到根节点在前序遍历中对应的左右叶子节点，
        //中序遍历的根节点与前序遍历的子节点之间存在
        // left = pre.slice(1, index + 1)
        // right = pre.slice(index+1)
        const preLeft = pre.slice(1,index + 1)
        const preRight = pre.slice(index + 1)
        //创建树的节点
        const node = new _Node(root)
        //传入子节点自己对应的前序遍历和中序遍历
        node.left = reConstructBinaryTree(preLeft,vinLeft)
        node.right = reConstructBinaryTree(preRight, vinRight)
        return node
    }
}
