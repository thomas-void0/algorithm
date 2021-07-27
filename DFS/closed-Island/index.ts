/**
 * 统计封闭岛屿的数目
 * @see https://leetcode-cn.com/problems/number-of-closed-islands/
 */
function closedIsland(grid: number[][]): number {
    let result = 0
    const m = grid.length
    const n = grid[0].length
    const used = Array.from({ length: m }, () => new Array(n).fill(1))

    for (let y = 0; y < m; y++) {
        grid[y][0] === 0 && dfs(y, 0)
    }

    for (let y = 0; y < m; y++) {
        grid[y][n - 1] === 0 && dfs(y, n - 1)
    }

    for (let x = 0; x < n; x++) {
        grid[0][x] === 0 && dfs(0, x)
    }

    for (let x = 0; x < n; x++) {
        grid[m - 1][x] === 0 && dfs(m - 1, x)
    }

    function dfs(y: number, x: number, tag = 0) {
        if (y < 0 || x < 0 || y >= m || x >= n) return
        if (used[y][x] === 0) return
        if (grid[y][x] !== 0) return

        used[y][x] = tag

        dfs(y - 1, x)
        dfs(y + 1, x)
        dfs(y, x - 1)
        dfs(y, x + 1)
    }

    for (let y = 0; y < m; y++) {
        for (let x = 0; x < n; x++) {
            if (grid[y][x] === 0 && used[y][x] === 1) {
                dfs(y, x)
                result++
            }
        }
    }

    return result
};