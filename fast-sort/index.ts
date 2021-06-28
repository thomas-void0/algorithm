/**
 * 快速排序：也是使用分治的思想。找出基准节点，重新切割数组。递归往复，最终完成排序
 */
namespace fastSort{
    function fastSort(array: number[]):number[] {
        
        if (array.length < 2) {
            return array
        }

        let target = array[0]
        const left:number[] = []
        const right:number[] = []
        for (let i = 1; i < array.length; i++){
            const current = array[i]
            current < target ? left.push(current) : right.push(current)
        }

        //连接左边 + 基准数 + 右边
        return fastSort(left).concat([target],fastSort(right))

    }

    console.log(fastSort([5,6,3,11,1,0,9]))
}