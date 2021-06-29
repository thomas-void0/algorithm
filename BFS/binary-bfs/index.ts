//从上往下打印出二叉树的每个节点，同层节点从左至右打印。
namespace binaryBfs{
    class Node{
        data: number
        left: Node | null
        right:Node | null
        constructor(num: number) {
            this.data = num
            this.left = null
            this.right = null
        }
    }

    class Tree{
        root:Node | null
        constructor(array: number[]) {
            this.root = null
            this.createTree(array)
        }

        createTree(array:number[]) {
            array.forEach(num => {
                const node = new Node(num)
                if (!this.root) {
                    this.root = node
                    return 
                }
                
                let currentNode:Node | null = this.root
                //与根节点相比，不断进行下沉操作
                while (currentNode) {
                    if (num < currentNode.data) {
                        //找left节点
                        if (!currentNode?.left) return currentNode.left = new Node(num)
                        currentNode = currentNode.left
                    } else {
                        //找right节点
                        if (!currentNode?.right) return currentNode.right = new Node(num)
                        currentNode = currentNode.right
                    }
                }
            })
        }
    }

    //广度优先遍历，先遍历距离根节点近的
    function binaryBfs(tree:Node) {
        //利用队列先进先出的特点
        const queue: Node[] = []
        const result:number[] = []

        queue.push(tree)
        while (queue.length > 0) {
            const current = queue.shift()
            if (current!.left) {
                queue.push(current!.left)
            }
            if (current!.right) {
                queue.push(current!.right)
            }

            result.push(current!.data)
        }

        return result
    }

        
    const tree = new Tree([5, 6, 3, 11, 1, 0, 9])
    
    console.log("tree", tree)
    console.log("result:",binaryBfs(tree.root!))

}