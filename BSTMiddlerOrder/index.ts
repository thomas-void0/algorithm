class Node2{
    data: number
    left:Node2 | null
    right:Node2 | null
    constructor(data: number) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BST2{
    root:null | Node2
    constructor() {
        this.root = null
    }
    //插入方法
    insert(data: number) {
        const node = new Node2(data)
        if (!this.root) {
            this.root = node
            return
        }
        let currentNode:Node2 | null = this.root
        let parentNode = null
        while (currentNode) {
            parentNode = currentNode
            if (data < parentNode.data) {
                currentNode = currentNode.left
                if (!currentNode) {
                    parentNode.left = new Node2(data) 
                    return
                }
            } else {
                currentNode = currentNode.right
                if (!currentNode) {
                    parentNode.right = new Node2(data) 
                    return
                }
            }
        }
    }
}
//二叉搜索树的中序遍历.即从left开始->parent->right
// 输入: [1,null,2,3]
//    2
//   / \
//   1  3
// 输出: [1,2,3]
//递归的版本
function middleOrder(node:any,array:number[]=[]) {
    if (node) {
        middleOrder(node.left,array)
        array.push(node.data)
        middleOrder(node.right,array)
    }
    return array
}

//非递归的版本,从left到data再到right
function middleOrder2(node:any) {
    const result:any[] = []
    const stack: any[] = []
    let current = node

    //如果存在current或者栈中还存在结点未消费，那么继续执行
    while (current || stack.length > 0) {
        //一直循环添加到当前current没有left为止
        while (current) {
            stack.push(current)
            current = current.left
        }
        //将没有消费的结点出栈使用，找出该结点的right进行下一轮循环
        current = stack.pop()!
        result.push(current.data)
        current = current.right
    }

    return result
}

const t2 = new BST2();
[2, 1, null,3].forEach(num =>num &&  t2.insert(num))

console.log("t2",t2)

console.log("2222", middleOrder2(t2.root))
