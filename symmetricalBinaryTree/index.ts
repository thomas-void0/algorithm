/**
 * 请实现一个函数，用来判断一颗二叉树是不是对称的。注意，
 * 如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。
 * 
 * 二叉树的右子树是二叉树左子树的镜像二叉树。
 * 镜像二叉树：两颗二叉树根结点相同，但他们的左右两个子节点交换了位置。
 */
namespace symmetricalBinaryTree{

    //判断是否对称
    function isSymmetricalTree(node1:any, node2:any):any {
        if (!node1 && !node2) return true
        if (!node1 || !node2) return false
        if (node1.data !== node2.data) return false
        
        return isSymmetricalTree(node1.left,node2.right) && isSymmetricalTree(node1.right,node2.left)
    }

    //创建一颗对称二叉树
    const t1 = {
        data: 8,
        left: {
            data: 6,
            left: {
                data: 5,
                left: null,
                right:null
            },
            right: {
                data: 7,
                left: null,
                right:null
            }
        },
        right: {
            data: 6,
            left: {
                data: 7,
                left: null,
                right:null
            },
            right: {
                data: 5,
                left: null,
                right:null
            }
        }
    };
    //非对称
    const t2 = {
        data: 8,
        left: {
            data: 6,
            left: {
                data: 51,
                left: null,
                right:null
            },
            right: {
                data: 7,
                left: null,
                right:null
            }
        },
        right: {
            data: 6,
            left: {
                data: 7,
                left: null,
                right:null
            },
            right: {
                data: 5,
                left: null,
                right:null
            }
        }
    };
    console.log("isSymmetricalTree1:",isSymmetricalTree(t1,t1))
    console.log("isSymmetricalTree2:",isSymmetricalTree(t2,t2))
}