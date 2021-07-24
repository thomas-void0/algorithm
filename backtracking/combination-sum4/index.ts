/**
 * 组合总和 Ⅳ
 * @see https://leetcode-cn.com/problems/combination-sum-iv/
 */
function combinationSum4(nums: number[], target: number): number {
    const result: number[][] = []
    const path: number[] = []
    let sum = 0

    function backtracking() {
        if (sum === target) {
            result.push(path.slice())
            return
        }

        for (let i = 0; i < nums.length && (sum + nums[i] <= target); i++) {
            path.push(nums[i])
            sum += nums[i]
            backtracking()
            path.pop()
            sum -= nums[i]
        }

    }

    backtracking()

    return result.length
};