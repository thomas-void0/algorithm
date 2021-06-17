//求解二叉树的最大深度
/**
 * 给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

示例：

给定二叉树 [3,9,20,null,null,15,7]，
    3
   / \
  9  20
    /  \
   15   7

深度优先遍历 + 分治
 * 一棵二叉树的最大深度等于左子树深度和右子树最大深度的最大值 + 1
 */
const testTree = {
  data: 3,
  left: {
    data: 9,
    left: null,
    right:null
  },
  right: {
    data: 20,
    left: {
      data: 15,
      left: null,
      right:null
    },
    right: {
      data: 7,
      left: null,
      right:null
    }
  }
}
function TreeDepth(pRoot:any):number {
    return pRoot ? Math.max(TreeDepth(pRoot.left),TreeDepth(pRoot.right)) + 1 : 0
}

console.log(TreeDepth(testTree))