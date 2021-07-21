/**
 * 全排列 II
 * @see https://leetcode-cn.com/problems/permutations-ii/
 */
//1,排列问题，还需要去重
function permuteUnique(nums: number[]): number[][] {
    const result: number[][] = []
    const path: number[] = []
    //去重
    const used = new Array(nums.length).fill(false)

    function backtracking(list: number[]) {
        //终止条件
        if (path.length === list.length) {
            result.push(path.slice())
            return
        }

        //遍历
        for (let i = 0; i < list.length; i++) {
            //树层去重used[i - 1] = false
            //树枝去重used[i - 1] = true
            if (i > 0 && list[i] === list[i - 1] && used[i - 1] === false) continue

            //这里的目的是，去除同树枝被使用过的，因为每一轮的循环都是从0开始的。所以需要在这里判断，该索引值的是否已经被使用了
            if (used[i] === false) {
                path.push(list[i])
                used[i] = true
                backtracking(list)

                path.pop()
                used[i] = false
            }

        }
    }

    backtracking(nums.sort((a, b) => a - b))

    return result
};