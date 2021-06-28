//遍历一个链表
function orderChainTable(chainTableList:any) {
    const arr: number[] = []
    let next = chainTableList
    while (next) {
        arr.push(next.val)
        next = next.next
    }
}