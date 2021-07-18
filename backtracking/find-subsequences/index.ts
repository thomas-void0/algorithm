/**
 * 递增子序列
 * @see https://leetcode-cn.com/problems/increasing-subsequences/
 */
//这个是一个子集的问题，采用回溯算法的方式去解决这个问题。
//要找出所有的子集，并且判断子集是不是满足以下的2个条件
//1，长度>=2
//2，递增
//3,这里还需要涉及到去重，方法就是设置一个参照数组。
function findSubsequences(nums: number[]): number[][] {
    const result: number[][] = []
    //创建一个临时的结果数组用于存储当前的结果
    const path: number[] = []
    function backtracking(startIndex: number, list: number[]) {
        //满足条件的子集都加入到结果数组中
        if (path.length >= 2) result.push([...path])
        //创建一个参照数组
        const used: boolean[] = []
        //遍历
        for (let i = startIndex; i < list.length; i++) {
            const len = path.length
            //如果path中有元素 && 但是最后一项大于于当前的nums[i]的话，|| 
            // 当前元素已经被使用过了
            // 就说明它不满足递增数组的条件
            if (
                ((len !== 0 && path[len - 1] > list[i])) ||
                (used[list[i]])
            ) {
                continue
            }

            path.push(list[i]) //记录这个元素在本层⽤过了，本层后⾯不能再⽤了
            used[list[i]] = true
            //递归调用
            backtracking(i + 1, list)
            //回溯
            path.pop()

        }
    }

    backtracking(0, nums)
    return result
};
