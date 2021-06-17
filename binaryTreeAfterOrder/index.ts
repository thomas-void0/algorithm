/**
 * 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。
 */
namespace binaryTreeAfterOrder {
        //创建一颗对称二叉树
        const t1 = {
            data: 10,
            left: {
                data: 9,
                left: {
                    data: 8,
                    left: null,
                    right:null
                },
                right: {
                    data: 10,
                    left: null,
                    right:null
                }
            },
            right: {
                data: 11,
                left: {
                    data: 10,
                    left: null,
                    right:null
                },
                right: {
                    data: 12,
                    left: null,
                    right:null
                }
            }
        };
    //后序遍历的最后一个数为根节点
    //左子树的值小于根节点，右子树的值大于根节点
    function binaryTreeAfterOrder(afterArr:number[]):boolean {
        const root = afterArr[afterArr.length - 1]

        //找出左子树
        for (var i = 0; i < afterArr.length - 1; i++){
            if(afterArr[i] > root) break
        }

        //找出右子树
        for (let j = i; j < afterArr.length; j++){
            if(afterArr[j] < root) return false
        }

        let left = true;
        //如果不止一个小于根节点的数，就递归执行左子树的后序遍历
        if (i > 0) {
            left = binaryTreeAfterOrder(afterArr.slice(0, 1))
        }
        
        let right = true;
        //如果不止一个大于根节点的数，就递归执行右子树的后序遍历
        if (i < afterArr.length - 1) {
            right = binaryTreeAfterOrder(afterArr.slice(i, afterArr.length - 1))
        }

        return left && right
    }

    function test() {
        const result:number[] = []
        const stack:any[] = []
        let last = null;//标记上一个访问的节点
        let current:any = t1
        while (current || stack.length > 0) {
            while (current) {
                stack.push(current)
                current = current.left
            }

            current = stack[stack.length - 1]
            //如果此结点不存在右子树，或者右子树已经被消费了。那么就将该节点的data值保存到数组中去
            if (!current.right || last === current.right) {
                current = stack.pop()
                result.push(current.data)
                last = current
                current = null
            } else {
                current = current.right
            }
        }
        return result
    }

    console.log(test())
    console.log(binaryTreeAfterOrder([1,3,2]))
}