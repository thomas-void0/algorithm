class Node3{
    data: number
    left:Node3 | null
    right:Node3 | null
    constructor(data: number) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BST3{
    root:null | Node3
    constructor() {
        this.root = null
    }
    //插入方法
    insert(data: number) {
        const node = new Node3(data)
        if (!this.root) {
            this.root = node
            return
        }
        let currentNode:Node3 | null = this.root
        let parentNode = null
        while (currentNode) {
            parentNode = currentNode
            if (data < parentNode.data) {
                currentNode = currentNode.left
                if (!currentNode) {
                    parentNode.left = new Node3(data) 
                    return
                }
            } else {
                currentNode = currentNode.right
                if (!currentNode) {
                    parentNode.right = new Node3(data) 
                    return
                }
            }
        }
    }
}
//二叉搜索树前序遍历.parent->left->right
// 输入: [1,null,2,3]
//    2
//   / \
//   1  3
// 输出: [2,1,3]
//递归的版本
function preOrder(node:any,array:number[] = []) {
    if (node) {
        array.push(node.data)
        preOrder(node.left,array)
        preOrder(node.right,array)
    }
    return array
}
const t3 = new BST3();
[2, 1, 3, null].forEach(num => num && t3.insert(num))
console.log(preOrder(t3.root))

//非递归版本
function preOrder2(node:any) {
  const result:number[] = []
  const stack:any[] = []
    let currentNode = node
    while (currentNode || stack.length > 0) {
        //入栈
        while (currentNode) {
            result.push(currentNode.data) //结点已经在此处被消费
            stack.push(currentNode)
            currentNode = currentNode.left
        }

        //出栈
        stack.pop()
        currentNode = currentNode.right
    }
}
const t4 = new BST3();
[2, 1, 3, null].forEach(num => num && t4.insert(num))
console.log(preOrder2(t4.root))