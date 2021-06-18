//反转一个链表：输入一个链表，反转链表后，输出新链表的表头。
namespace reverseChainTable{
    const chain3 = {val:2,next:null}
    const chain2 = {val:2,next:chain3}
    const chain1 = {val:1,next:chain2}
    
    function reverseChainTable(chain: any) {
        let temp = null
        let current = chain
        let originNext = chain.next
        while (originNext) {
            current.next = temp
            temp = originNext
            current = originNext
        }
    }

   console.log(reverseChainTable(chain1))
}
