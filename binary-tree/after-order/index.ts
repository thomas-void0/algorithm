class Node4 {
    data: number
    left: Node4 | null
    right: Node4 | null
    constructor(data: number) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BSt6 {
    root: null | Node4
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
        let currentNode: Node4 | null = this.root
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
function afterOrder(node: any, array: number[] = []) {
    if (node) {
        afterOrder(node.left, array)
        afterOrder(node.right, array)
        array.push(node.data)
    }
    return array
}
const t5 = new BSt6();
[2, 1, 3, null].forEach(num => num && t5.insert(num))
console.log(afterOrder(t5.root))

//非递归版本
function afterOrder2(node: any) {
    const result = [];
    const stack = [];
    let last = null; // 标记上一个访问的节点
    let current = node;
    while (current || stack.length > 0) {
        //left结点入栈
        while (current) {
            stack.push(current);
            current = current.left;
        }
        //获取栈中最后一个结点
        current = stack[stack.length - 1];
        //如果此结点不存在右子树，或者右子树已经被消费了。那么就将该节点的data值保存到数组中去
        if (!current.right || current.right == last) {
            current = stack.pop();
            result.push(current.data);
            last = current;
            current = null; // 继续弹栈
        } else {
            current = current.right;
        }
    }
    return result;
}
const t6 = new BSt6();
[2, 1, 3, null].forEach(num => num && t6.insert(num))
console.log(afterOrder2(t6.root))
