//从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。
namespace binaryBfs2{

    class Node{
        data: number
        left:Node | null
        right:Node | null
        constructor(data: number) {
            this.data = data
            this.left = null
            this.right = null
        }
    }
    
    class Tree{
        root: Node | null
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

                let currentNode:Node | null = this.root
                while (currentNode) {
                    if (num < currentNode.data) {
                        //走左边
                        if (!currentNode.left) return currentNode.left = node
                        currentNode = currentNode.left
                    }

                    if (num > currentNode.data) {
                        //走右边
                        if (!currentNode.right) return currentNode.right = node
                        currentNode = currentNode.right
                    }
                }
            })
        }
    }
    
    //逐层打印
    function binaryBfs2(tree:Node) {
        const result:number[][] = []
        const queue: Node[] = []
        let tmpArr: number[] = [] //用于存储每一层的值
        
        let layerNums = 1 //默认第一层的节点数

        queue.push(tree)
        while (queue.length > 0) {
            const current = queue.shift()
            if (current?.left) {
                queue.push(current.left)
            }

            if (current?.right) {
                queue.push(current.right)
            }

            tmpArr.push(current!.data)
            layerNums-- //减少一次层数

            //这一层已经遍历完成了
            if (layerNums === 0) {
                result.push(tmpArr)
                layerNums = queue.length //等于栈中余下结单的数量
                tmpArr = []
            }
            
        }

        return result
    }
    const tree = new Tree([5, 6, 3, 11, 1, 0, 9])
    
    console.log("tree", tree)
    console.log("binaryBfs2:",binaryBfs2(tree.root!))
}