class Node1{
    data: number
    left:Node1 | null
    right:Node1 | null
    constructor(data: number) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BST{
    root:null | Node1
    constructor() {
        this.root = null
    }
    //插入方法
    insert(data: number) {
        const node = new Node1(data)
        if (!this.root) {
            this.root = node
            return
        }
        let currentNode = this.root
        let parentNode = null
        while (currentNode) {
            parentNode = currentNode
            if (data < parentNode.data) {
                //@ts-ignore
                currentNode = currentNode.left
                if (!currentNode) {
                    parentNode.left = new Node1(data) 
                    return
                }
            } else {
                //@ts-ignore
                currentNode = currentNode.right
                if (!currentNode) {
                    parentNode.right = new Node1(data) 
                    return
                }
            }
        }
    }
    //前序遍历.从data开始遍历
    preOrder(node:Node1 | null,cb:(node:number)=>void) {
        if (node) {
            cb(node.data)
            this.preOrder(node.left,cb)
            this.preOrder(node.right,cb)
        }
    }
    //中序遍历，从left开始
    middleOrder(node:Node1 | null,cb:(node:number)=>void) {
        if (node) {
            this.preOrder(node.left, cb)
            cb(node.data)
            this.preOrder(node.right,cb)
        }
    }
    //后序遍历，从right开始
    laterOrder(node: Node1 | null, cb: (node: number) => void) {
        if (node) {
            this.preOrder(node.left, cb)
            this.preOrder(node.right, cb)
            cb(node.data)
        }
    }
    //获取最小值
    getMin() {
        let current = this.root
        while (current) {
            if (!current.left) {
                return current
            }
            current = current.left
        }
    }
    //获取最大值
    getMax() {
        let current = this.root 
        while (current) {
            if (!current.right) {
                return current
            }
            current = current.right
        }
    }
    //获取某一个值

}
