/**
 * 两数相加
 * @see https://leetcode-cn.com/problems/add-two-numbers/
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    //新建一个链表，第一位直接放弃
    const newList = new ListNode(0);
    let cur = newList
    let p1 = l1
    let p2 = l2
    let carry = 0
    while (p1 || p2) {
        const v1 = p1 ? p1.val : 0
        const v2 = p2 ? p2.val : 0

        const v = v1 + v2 + carry
        carry = Math.floor(v / 10)
        cur.next = new ListNode(v % 10)

        if (p1) p1 = p1.next
        if (p2) p2 = p2.next

        cur = cur.next
    }

    //当计算完毕后，carry还有值
    if (carry) cur.next = new ListNode(carry)

    return newList.next
};
