/**
 * 组合总和 III
 * @see https://leetcode-cn.com/problems/combination-sum-iii/
 */
function combinationSum3(k: number, n: number): number[][] {
    const result: number[][] = []
    const path: number[] = []
    function backtracking(startIndex: number, sum: number) {
        //设置退出条件  
        if (path.length === k) {
            sum === n && result.push([...path])
            return
        }

        //如果sum的值大于了目标值了，再往下一层添加也是没有意义的。直接剪枝
        if (sum >= n) {
            return
        }

        //遍历 && 剪枝
        const len = 9 - (k - path.length) + 1
        for (let i = startIndex; i <= len; i++) {
            path.push(i)
            //递归
            backtracking(i + 1, sum += i)
            //回溯
            sum -= path.pop()!

        }
    }
    backtracking(1, 0)
    return result
};