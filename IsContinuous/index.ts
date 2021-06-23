/**
 * 扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。
 * 2-10为数字本身，A为1，J为11...大小王可以看成任何数字，可以把它当作0处理。
 * 
#
 */
namespace isContinuous{
    function isContinuous(array:number[]) {
        //进行数组排序
        array.sort(compare)
        const len = array.length
        for (let i = 0; i < len;i++){
            const j = i + 1
            //如果后一个数减去前一个数间隔大于了1，那么说明没有构成顺子
            if (j < len && (array[j] - array[i] > 1)) return false
            //如果后一个数减前一个数间隔等于0，说明前后两个数相同，不能构成顺子
            if (j < len && (array[j] - array[i] === 0)) return false
        }
        return true
    }
    function compare(a:number,b:number) {
        const value = a - b
        if (value > 0) return 1
        if (value === 0) return 0
        return -1
    }
    console.log("test:",isContinuous([1,3,2,5,4]))
}