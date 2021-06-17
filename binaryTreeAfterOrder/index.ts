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
            left = binaryTreeAfterOrder(afterArr.slice(0, i))
        }
        
        let right = true;
        //如果不止一个大于根节点的数，就递归执行右子树的后序遍历
        if (i < afterArr.length - 1) {
            right = binaryTreeAfterOrder(afterArr.slice(i, afterArr.length - 1))
        }

        return left && right
    }

    function afterTest() {
        const result:number[] = []
        const stack:any[] = []
        let last = null //这里记录的主要目的是为了：对比上一个消费后的节点，是不是本次循环中节点的right节点。借此判断是否添加本次循环中的节点值
        let current:any = t1 //记录当前运行的节点
        //如果存在节点或者栈中还有没有执行完毕的节点，那么循环继续
        while (current || stack.length > 0) {
            //将所有的左子树和根节点加入到栈中
            while (current) {
                stack.push(current)
                current = current.left
            }

            //取出栈中的节点进行操作
            current = stack[stack.length - 1]
            //如果该节点没有右子树，或者右子树已经被消费过了，那么直接取值
            if (!current.right || last === current.right) {
                current = stack.pop()
                result.push(current.data)
                last = current
                current = null
            } else {
                //如果有右子树，那么将右子树按照上述规则进行入栈处理
                current = current.right
            }
        }
        return result   
    }

    function preTest() {
        const result:number[] = []
        const stack: any[] = []
        let current:any = t1

        while (current || stack.length > 0) {
            while (current) {
                result.push(current.data)
                stack.push(current)
                current = current.left
            }

            current = stack.pop()
            current = current.right
        }
        return result
    }

    function VerifySquenceOfBST(sequence:any):boolean {
        if (sequence && sequence.length > 0) {
          var root = sequence[sequence.length - 1]
          for (var i = 0; i < sequence.length - 1; i++) {
            if (sequence[i] > root) {
              break;
            }
          }
          for (let j = i; j < sequence.length - 1; j++) {
            if (sequence[j] < root) {
              return false;
            }
          }
          var left = true;
          if (i > 0) {
            left = VerifySquenceOfBST(sequence.slice(0, i));
          }
          var right = true;
          if (i < sequence.length - 1) {
            right = VerifySquenceOfBST(sequence.slice(i, sequence.length - 1));
          }
          return left && right;
        }
        return false
    }
    console.log(preTest())
    console.log(afterTest())
    console.log("after",VerifySquenceOfBST([8, 10, 9, 10, 12, 11, 10]))
    console.log("pre",VerifySquenceOfBST([10, 9, 8, 10, 11, 10, 12]))
}