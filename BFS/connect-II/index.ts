/**
 * @see https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node-ii/
 * 给定一个二叉树
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。

初始状态下，所有 next 指针都被设置为 NULL。

进阶：

你只能使用常量级额外空间。
使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。
 

示例：

输入：root = [1,2,3,4,5,null,7]
输出：[1,#,2,3,#,4,5,7,#]
解释：给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。序列化输出按层序遍历顺序（由 next 指针连接），'#' 表示每层的末尾。
 

提示：

树中的节点数小于 6000
-100 <= node.val <= 100
 */
namespace connectII{
    class Node {
        val: number
        left: Node | null
        right: Node | null
        next: Node | null
        constructor(val?: number, left?: Node | null, right?: Node | null, next?: Node) {
            this.val = (val===undefined ? 0 : val)
            this.left = (left===undefined ? null : left)
            this.right = (right === undefined ? null : right)
            this.next = (next===undefined ? null : next)
        }
    }

    function connect(root: Node | null): Node | null {
        if (root) {
            const queue:Node[] = [root]

            while (queue.length > 0) {
                //查看同一层需要执行的节点
                const len = queue.length
                for (let i = 0; i < len;i++){
                    const current = queue.shift()!
                    //如果i不是最后一个索引值，那么设置next
                    if (i < len - 1) current.next = queue[0]

                    //将下一层的节点加入到栈中
                    const left = current.left
                    const right = current.right

                    left && queue.push(left)
                    right && queue.push(right)
                }
            }
        }

        return root
    };
}
