class Node4{
    data: number
    left:Node4 | null
    right:Node4 | null
    constructor(data: number) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BSt6{
    root:null | Node4
    constructor() {
        this.root = null
    }
    //插入方法
    insert(data: number) {
        const node = new Node4(data)
        if (!this.root) {
            this.root = node
            return
        }
        let currentNode:Node4 | null = this.root
        let parentNode = null
        while (currentNode) {
            parentNode = currentNode
            if (data < parentNode.data) {
                currentNode = currentNode.left
                if (!currentNode) {
                    parentNode.left = new Node4(data) 
                    return
                }
            } else {
                currentNode = currentNode.right
                if (!currentNode) {
                    parentNode.right = new Node4(data) 
                    return
                }
            }
        }
    }
}
//二叉搜索树后序遍历.left->right->parent
// 输入: [1,null,2,3]
//    2
//   / \
//   1  3
// 输出: [1,3,2]
//递归的版本
function afterOrder(node:any,array:number[] = []) {
    if (node) {
        afterOrder(node.left,array)
        afterOrder(node.right, array)
        array.push(node.data)
    }
    return array
}
const t5 = new BSt6();
[2, 1, 3, null].forEach(num => num && t5.insert(num))
console.log(afterOrder(t5.root))

//非递归版本
function afterOrder2(node:any) {
    const result:number[] = []
    const stack:any[] = []

    let currentNode = node
  

}
const t6 = new BSt6();
[2, 1, 3, null].forEach(num => num && t6.insert(num))
console.log(afterOrder2(t6.root))