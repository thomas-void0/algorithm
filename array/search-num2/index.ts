/**
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 * 例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。
 * 由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。
 */
namespace moreThanHalfNum_Solution{
    function moreThanHalfNum_Solution(array:number[]) {
        const len = array.length
        const halfLen = len / 2
        const map: { [propName: string]: number } = {}
        for (let i = 0; i < len; i++){
            const key = array[i]
            if(map[key]){
                map[key] = ++map[key]
            } else {
                map[key] = 1
            }
            if (map[key] && map[key] > halfLen) return key
        }
    }

    console.log("hahaha=>",moreThanHalfNum_Solution([1,2,3,2,2,2,5,4,2]))
}