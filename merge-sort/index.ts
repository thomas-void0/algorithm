/**
 * 归并排序：该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。
 *（分治法将问题分成一些小的问题然后递归求解，而治的阶段则将分的阶段得到的各答案"修补"在一起，即分而治之)。
 *
 * 将已有序的子序列合并，得到完全有序的序列
 * 即先使每个子序列有序，再使子序列段间有序
 * 若将两个有序表合并成一个有序表，称为二路归并
 */
namespace mergeSort{
    //分割
    function mergeSort(array:number[]):number[] {
        if (array.length < 2) {
            return array
        }
        
        const mid = Math.floor(array.length / 2);
        const front = array.slice(0,mid)
        const end = array.slice(mid)

        console.log("font:",front)
        console.log("end:",end)

        return merge(mergeSort(front),mergeSort(end))
    }

    function merge(front: number[], end: number[]) {
        const tmp:number[] = []
        while (front.length && end.length) {
            tmp.push(front[0] < end[0] ? front.shift()! : end.shift()!)
        }

        while (front.length) {
            tmp.push(front.shift()!)
        }
        while (end.length) {
            tmp.push(end.shift()!)
        }
        console.log("tmp==>",tmp)
        return tmp
    }

    console.log("mergeSort:",mergeSort([5,6,3,11,1,0,9]))
}