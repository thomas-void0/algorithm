/**
 * @see https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/
 * 给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
例如：
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回锯齿形层序遍历如下：

[
  [3],
  [20,9],
  [15,7]
]
 */
namespace zigzagLevelOrder{
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

    const obj = {
        val: 1,
        left: {
            val: 2,
            left: {
                val: 4,
                left: null,
                right:null
            },
            right:null
        },
        right: {
            val:3,
            left: null,
            right:{
                val: 5,
                left: null,
                right:null
            },
        },
    }

    //这里相当于是，奇数行从左到右。偶数行从右到左
    function zigzagLevelOrder(root: TreeNode | null): number[][] {

        const result: number[][] = []

        if (root) {
            //创建一个奇数栈
            const oddStack: Array<TreeNode | null> = []
            //创建一个偶数栈
            const evenStack: Array<TreeNode | null> = []

            //创建一个存储数组
            let tempArr:number[] = []

            oddStack.push(root)
            while (oddStack.length > 0 || evenStack.length > 0) {
                //获取奇数栈的val
                while (oddStack.length > 0) {
                    const current = oddStack.pop()
                    current && tempArr.push(current.val)

                    //入栈偶数栈,因为奇数栈的left和right对应的是下一层，所以为偶数栈
                    const left = current?.left
                    const right = current?.right

                    //因为栈是先入后出，所以在偶数栈中先加入左边的节点。再加入右边的节点。
                    left !== void 0 && evenStack.push(left)
                    right !== void 0 && evenStack.push(right)
                }

                //获取奇数层的数组
                if (tempArr.length > 0) {
                    result.push(tempArr)
                    tempArr = [] //重置
                }

                //获取偶数栈的val
                while (evenStack.length > 0) {
                    const current = evenStack.pop()
                    current && tempArr.push(current.val)

                    //入栈偶数栈,因为奇数栈的left和right对应的是下一层，所以为偶数栈
                    const left = current?.left
                    const right = current?.right

                    //因为栈是先入后出，所以在奇数栈中先加入右边的节点。再加入左边的节点。
                    right !== void 0 && oddStack.push(right)
                    left !== void 0 && oddStack.push(left)
                }

                //获取偶数层的数组
                if (tempArr.length > 0) {
                    result.push(tempArr)
                    tempArr = [] //重置
                }

            }
         
        } 
        
        return result
    };

    console.log("==>",zigzagLevelOrder(obj))

    // [1,2,3,4,null,null,5]
}