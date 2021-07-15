/**
 * 组合总和
 * @see https://leetcode-cn.com/problems/combination-sum/
 */
function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = []
    let sum = 0
    const path: number[] = []

    function backtracking(candidates: number[], startIndex: number) {
        if (sum > target) return;
        if (sum === target) return result.push([...path])

        //遍历
        for (let i = startIndex; i < candidates.length; i++) {
            const value = candidates[i]
            path.push(value)
            sum += value
            //递归
            backtracking(candidates, i)
            //回溯
            sum -= value
            path.pop()

        }
    }

    backtracking(candidates, 0)

    return result
};
console.log("combinationSum", combinationSum([2, 3, 5], 8))