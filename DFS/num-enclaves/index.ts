/**
 * 飞地的数量
 * @see https://leetcode-cn.com/problems/number-of-enclaves/
 */
function numEnclaves(grid: number[][]): number {
    let result = 0
    const m = grid.length
    const n = grid[0].length
    const used = Array.from({ length: m }, () => new Array(n).fill(0))

    for (let y = 0; y < m; y++) {
        if (grid[y][0] === 1) dfs(y, 0)
    }

    for (let x = 0; x < n; x++) {
        if (grid[0][x] === 1) dfs(0, x)
    }

    for (let x = 0; x < n; x++) {
        if (grid[m - 1][x] === 1) dfs(m - 1, x)
    }

    for (let y = 0; y < m; y++) {
        if (grid[y][n - 1] === 1) dfs(y, n - 1)
    }

    function dfs(y: number, x: number) {
        if (y < 0 || x < 0 || y >= m || x >= n) return
        if (used[y][x] === 1) return
        if (grid[y][x] === 0) return

        used[y][x] = 1

        dfs(y - 1, x)
        dfs(y + 1, x)
        dfs(y, x - 1)
        dfs(y, x + 1)
    }

    for (let y = 0; y < m; y++) {
        for (let x = 0; x < n; x++) {
            if (grid[y][x] === 1 && used[y][x] === 0) {
                result++
            }
        }
    }

    return result
};
