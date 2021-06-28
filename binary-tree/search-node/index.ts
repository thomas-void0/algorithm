/**
 * 给定一棵二叉搜索树，请找出其中的第k小的结点。 例如， （5，3，7，2，4，6，8） 中，按结点数值大小顺序第三小结点的值为4。
 * 
 * 二叉搜索树的中序遍历即排序后的节点，本题实际考察二叉树的遍历。
 */
namespace binaryTreeSearchKNode {
    //创建一颗对称二叉树
    const t1 = {
        data: 5,
        left: {
            data: 3,
            left: {
                data: 2,
                left: null,
                right:null
            },
            right: {
                data: 4,
                left: null,
                right:null
            }
        },
        right: {
            data: 7,
            left: {
                data: 6,
                left: null,
                right:null
            },
            right: {
                data: 8,
                left: null,
                right:null
            }
        }
    };
    const array:number[] = []
    function searchKNum(node:any,k:number) {
        //进行中序遍历

        //递归
        // middleOrder(node);
        // return array[k -1]

        //非递归
        const arr = middleOrder2(node)
        return arr[k - 1]
    }

    function middleOrder(node: any) {
        if (node) {
            middleOrder(node.left)
            array.push(node.data)
            middleOrder(node.right)
        }
        return []
    }

    //非递归实现
    function middleOrder2(node: any) {
        const result:number[] = []
        const stack:any[] = []

        let current = node
        while (current || stack.length > 0) {
            while (current) {
                stack.push(current)
                current = current.left
            }

            current = stack.pop()
            result.push(current.data)
            current = current.right
        }
        
        return result
    }

    console.log("k1:",searchKNum(t1,3))
}