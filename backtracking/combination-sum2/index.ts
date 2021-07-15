/**
 *  组合总和 II
 * @see https://leetcode-cn.com/problems/combination-sum-ii/ 
 */
//难点在于如何去重
function combinationSum2(candidates: number[], target: number): number[][] {
    const result: number[][] = []
    const path: number[] = []
    //创建一个used数组用于记录使用过的数字的索引值
    const used = new Array(candidates.length).fill(0)
    let sum = 0

    function backtracking(candidates: number[], startIndex: number) {
        if (sum > target) return
        if (sum === target) {
            result.push([...path])
            return
        }

        //遍历
        for (let i = startIndex; i < candidates.length; i++) {
            //如果当前项等于前一项同时前一项在上一轮的循环中已经被使用过了，所以本次这个数不能再被使用了
            if (i > 0 && candidates[i] === candidates[i - 1] && used[i - 1] === 0) {
                continue;
            }
            used[i] = 1//记录已经被使用过
            const value = candidates[i]
            path.push(value)
            sum += value
            //递归,不能包含自己，所以要缩短区间
            backtracking(candidates, i + 1)
            //回溯撤销
            used[i] = 0//不满足条件，没有被加入到结果。重置标记
            sum -= value
            path.pop()
        }
    }

    //要去重，必须对此进行排序。之后才能前后两项的进行对比
    backtracking(candidates.sort((a, b) => a - b), 0)

    return result
};
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))
