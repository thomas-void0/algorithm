/**
 * 机器人的运动范围
 * @see https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/
 */
function movingCount(m: number, n: number, k: number): number {
    let result = 0
    //构建矩阵
    const grid = Array.from({ length: m }, () => new Array(n).fill(0));
    //查看x,y的索引值位数和是否大于了k，如果没有大于k那么就不可以到达此位置。需要判断边界问题，避免越界
    function checkPos(y: number, x: number) {
        let sum = 0
        if (y >= 10) {
            const _list = `${y}`.split("")
            for (let val of _list) sum += (+val)
        } else {
            sum += y
        }

        if (x >= 10) {
            const _list = `${x}`.split("")
            for (let val of _list) sum += (+val)
        } else {
            sum += x
        }

        return sum <= k
    }

    function dfs(y: number, x: number) {
        //标记访问
        if (grid[y][x] === 1) return
        grid[y][x] = 1
        result++

        y < m - 1 && checkPos(y + 1, x) && dfs(y + 1, x)
        x < n - 1 && checkPos(y, x + 1) && dfs(y, x + 1)
    }

    dfs(0, 0)

    return result
};