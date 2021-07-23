/**
 * 岛屿的最大面积
 * @see https://leetcode-cn.com/problems/max-area-of-island/
 */
function maxAreaOfIsland(grid: number[][]): number {
    let num = 0
    const m = grid.length
    const n = grid[0].length
    let result = 0

    //去重，避免重复计数
    const used: boolean[][] = Array.from({ length: m }, () => new Array(n).fill(false))

    function bfs(y: number, x: number) {
        //判断坐标是否满足要求
        if (y < 0 || x < 0 || y >= m || x >= n || used[y][x]) return false
        if (grid[y][x] === 0) return false

        //如果是陆地
        used[y][x] = true
        num++

        //查找这个点的其他方向
        bfs(y - 1, x) || bfs(y + 1, x) || bfs(y, x - 1) || bfs(y, x + 1)
    }

    for (let y = 0; y < m; y++) {
        for (let x = 0; x < n; x++) {
            if (grid[y][x] === 1 && used[y][x] === false) {
                bfs(y, x)
                result = Math.max(result, num)
                num = 0//重置
            }
        }
    }

    return result
};