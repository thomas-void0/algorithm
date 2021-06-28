/**
 * 给定一棵二叉树的前序遍历和中序遍历，求其后序遍历
输入描述:
两个字符串，其长度n均小于等于26。 第一行为前序遍历，第二行为中序遍历。 二叉树中的结点名称以大写字母表示：A，B，C....最多26个结点。
输出描述:
输入样例可能有多组，对于每组测试样例， 输出一行，为后序遍历的字符串。

输入
ABC
BAC

FDXEAG
XDEFAG

输出
BCA
XEDGAF
 */
namespace GetAfterOrder{
    function getHRD(pre:any, vin:any):any {
        if (!pre) {
            return '';
        }
        if (pre.length === 1) {
            return pre;
        }
        //获取根节点
        const root = pre[0]
        //获取根节点在中序遍历中的索引值
        const index = vin.indexOf(root)
        //获取中序遍历中的left和right
        const vinLeft = vin.substring(0,index + 1)
        const vinRight = vin.substring(index + 1)
        //获取前序遍历中的left和right
        const preLeft = pre.substring(1, index + 1)
        const preRight = pre.substring(index + 1)
        //返回遍历出的值
        return getHRD(preLeft,vinLeft) + getHRD(preRight,vinRight) + root
    }

    console.log(getHRD("ABC","BAC")) 
    console.log(getHRD("FDXEAG","XDEFAG")) 
}