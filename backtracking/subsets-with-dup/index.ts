/**
 * 子集 II
 * @see https://leetcode-cn.com/problems/subsets-ii/
 */
//包含重复元素，涉及到去重
function subsetsWithDup(nums: number[]): number[][] {

    if (nums.length === 0) return []

    const result: number[][] = []
    const path: number[] = []
    //设置一个去重数组
    const used = new Array(nums.length).fill(false)

    function backtracking(startIndex: number, nums: number[]) {
        if (path.length > nums.length) return
        result.push(path.slice())

        for (let i = startIndex; i < nums.length; i++) {
            //树层去重
            if (i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) {
                continue
            }

            used[i] = true
            path.push(nums[i])

            backtracking(i + 1, nums)

            used[i] = false
            path.pop()
        }
    }

    backtracking(0, nums.sort((a, b) => a - b))

    return result
};