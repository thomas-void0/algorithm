//操作给定的二叉树，将其变换为源二叉树的镜像。
/**
 * 
 *        源二叉树 
    	    8
    	   /  \
    	  6   10
    	 / \  / \
    	5  7 9 11
    	镜像二叉树
    	    8
    	   /  \
    	  10   6
    	 / \  / \
    	11 9 7  5
 */
namespace mirrorBinaryTree{
    function mirror(node:any) {
        if (node) {
            const temp = node.left
            node.left = node.right
            node.right = temp
            mirror(node.left)
            mirror(node.right)
        }
    }

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

    console.log("t2==>", t2)
    mirror(t2)
    console.log("mirror==>",t2)
}