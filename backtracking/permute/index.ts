/**
 * 全排列
 * @see https://leetcode-cn.com/problems/permutations/
 */
//排列问题不能设置startIndex,排列问题需要设置参照数组来进行去重
function permute(nums: number[]): number[][] {
    const result: number[][] = []
    const path: number[] = []
    const used = new Array(nums.length).fill(0)

    function backtracking(nums: number[]) {
        if (path.length > nums.length) return
        if (path.length === nums.length) result.push(path.slice())
        const len = nums.length
        for (let i = 0; i < len; i++) {
            if (used[i]) continue

            used[i] = true
            path.push(nums[i])
            backtracking(nums)

            path.pop()
            used[i] = false
        }
    }

    backtracking(nums)
    return result
};
