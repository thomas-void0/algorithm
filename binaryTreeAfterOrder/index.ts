/**
 * 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。
 */
namespace binaryTreeAfterOrder {
    //后序遍历的最后一个数为根节点
    //左子树的值小于根节点，右子树的值大于根节点
    function binaryTreeAfterOrder(afterArr:number[]):boolean {
        const root = afterArr[afterArr.length - 1]
        for (var i = 0; i < afterArr.length - 1; i++){
            if(afterArr[i] > root) break
        }

        for (let j = i; j < afterArr.length; j++){
            if(afterArr[j] < root) return false
        }

        let left = true;
        if (i > 0) {
            left = binaryTreeAfterOrder(afterArr.slice(0, 1))
        }
        let right = true;
        if (i < afterArr.length - 1) {
            right = binaryTreeAfterOrder(afterArr.slice(i, afterArr.length - 1))
        }

        return left && right
    }
}