/**
 * 火柴拼正方形
 * @see https://leetcode-cn.com/problems/matchsticks-to-square/
 */
function makesquare(matchsticks: number[]): boolean {

    //不能低于4根火柴
    if (matchsticks.length < 4) return false

    //火柴长度的总和 / 4 = 每条边应该具有的长度
    const sum = matchsticks.reduce((prev, num) => {
        prev += num
        return prev
    }, 0)

    //如果总的边长不能平均分配
    if (sum % 4 !== 0) return false

    //每条边的长度
    const sideLen = sum / 4

    //对数组进行排序，有利于进行剪枝操作，因为最大的数最先开始。那么如果不满足条件就可以直接退出了
    const matchsticksSort = matchsticks.sort((a, b) => b - a)

    if (matchsticksSort[0] > sideLen) return false

    //对每条边进行拼接
    const path = new Array(4).fill(0)
    function dfs(index: number, list: number[]) {

        //当所有的火柴都用完后，判断是否满足条件
        if (index === list.length) {
            return (
                path[0] === path[1] &&
                path[1] === path[2] &&
                path[2] === path[3]
            )
        }

        //如果当前边长度还没有达到临界值，那么就继续往这条边上添加火柴
        for (let i = 0; i < 4; i++) {
            if (path[i] + list[index] <= sideLen) {
                path[i] += list[index]
                //添加下一根火柴
                if (dfs(index + 1, list)) return true
                //将不符合匹配要求的火柴抽离出来，给其他的边尝试
                path[i] -= list[index]
            }
        }

        return false
    }

    return dfs(0, matchsticksSort)
};