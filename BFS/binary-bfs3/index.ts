/**
 * 请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，
 * 第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。
 */
namespace binaryBfs3{

    class Node {
        data:number
        left:Node | null
        right:Node | null
        constructor(data: number) {
            this.data = data
            this.left = null
            this.right = null
        }
    }

    class Tree{
        root:Node | null
        constructor(array: number[]) {
            this.root = null
            this.create(array)
        }

        create(array: number[]) {
            array.forEach(num => {
                const node = new Node(num)
                if (!this.root) {
                    this.root = node
                    return
                }

                let current:Node | null = this.root
                while (current) {
                    if (num < current.data) {
                        if (!current.left) return current.left = node
                        current = current.left
                    } else {
                        if (!current.right) return current.right = node
                        current = current.right
                    }

                }
            })
        }
    }

    //之字形打印
    function binaryBfs3(tree:Node) {
        //奇数行从左向右
        //偶数行从右到左

        const evenStack: Node[] = [] //创建一个偶数栈
        const oddStack:Node[] = [] //创建一个奇数栈

        let tempArr:number[] = [] //用于存储层数据
        const result:number[][] = []

        oddStack.push(tree)
        while (oddStack.length > 0 || evenStack.length > 0) {
            
            while (oddStack.length) {
                const current = oddStack.pop()
                tempArr.push(current!.data)

                //因为是先入后出，所以入栈顺序和出栈顺序是相反的
                if (current?.left) {
                    evenStack.push(current.left)
                }
                if (current?.right) {
                    evenStack.push(current.right)
                }
            }

            if (tempArr.length) {
                result.push(tempArr)
                tempArr = []
            }

            while (evenStack.length) {
                const current = evenStack.pop()
                tempArr.push(current!.data)
                if (current?.right) {
                    oddStack.push(current.right)
                }
                if (current?.left) {
                    oddStack.push(current.left)
                }
            }

            if (tempArr.length) {
                result.push(tempArr)
                tempArr = []
            }
           
        }

        return result
    }
    const tree = new Tree([5, 6, 3, 11, 1, 0, 9])

    console.log("tree", tree)
    console.log("binaryBfs3:",binaryBfs3(tree.root!))
}
