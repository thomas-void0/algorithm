/**
 * 子集
 * @see https://leetcode-cn.com/problems/subsets/
 */
//1，去重，
function subsets(nums: number[]): number[][] {
    const result: number[][] = []
    const path: number[] = []
    //创建一个使用过的数组，标记位置
    const used = new Array(nums.length).fill(0)

    function backtracking(nums: number[], startIndex: number) {
        //都是子集
        if (startIndex <= nums.length) {
            result.push([...path])
        }
        //终止条件,找到最后一项
        if (startIndex > nums.length) return

        for (let i = startIndex; i < nums.length; i++) {
            //解决重复问题
            if (i > 0 && nums[i] === nums[i - 1] && used[i - 1] === 0) {
                continue
            }

            used[i] = 1
            path.push(nums[i])

            backtracking(nums, i + 1)

            //回溯
            used[i] = 0
            path.pop()
        }
    }

    backtracking(nums.sort((a, b) => a - b), 0)

    return result
};