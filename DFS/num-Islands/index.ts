/**
 * 岛屿数量
 * @see https://leetcode-cn.com/problems/number-of-islands/
 */
function numIslands(grid: string[][]): number {
    const m = grid.length
    const n = grid[0].length
    const used = Array.from({ length: m }, () => new Array(n).fill(false))
    let result = 0

    for (let y = 0; y < m; y++) {
        for (let x = 0; x < n; x++) {
            if (grid[y][x] === "1" && used[y][x] === false) {
                dfs(y, x)
                result++
            }
        }
    }

    function dfs(y: number, x: number) {
        if (y < 0 || x < 0 || y >= m || x >= n || used[y][x]) {
            return
        }
        if (grid[y][x] !== '1') return

        used[y][x] = true

        //如果为1进行上下左右查找
        dfs(y - 1, x)
        dfs(y + 1, x)
        dfs(y, x - 1)
        dfs(y, x + 1)
    }

    return result
};