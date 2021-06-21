//反转一个链表：输入一个链表，反转链表后，输出新链表的表头。
namespace reverseChainTable{
    const chain4 = {val:4,next:null}
    const chain3 = {val:3,next:chain4}
    const chain2 = {val:2,next:chain3}
    const chain1 = {val:1,next:chain2}
    
    const reverseList = function (head:any) {
        let currentNode = null;
        let headNode = head;
        while (head && head.next) {
          currentNode = head.next; 
          head.next = currentNode.next;
          currentNode.next = headNode;
          headNode = currentNode;
        }
        return headNode;
    };

   console.log(reverseList(chain1))
}
