/**
 * 边框着色
 * @see https://leetcode-cn.com/problems/coloring-a-border/
 * [
 * [1,1,2],
 * [1,2,2],
 * [2,1,1],
 * [2,2,1],
 * [1,1,2]
 * ]
 * 
[
    [1,1,2],
    [1,2,2],
    [1,1,1],
    [2,2,1],
    [1,1,2]
]

[
    [1,1,2],
    [1,2,2],
    [1,1,1],
    [1,1,1],
    [1,1,2]
]
 */
function colorBorder(grid: number[][], r0: number, c0: number, color: number): number[][] {

    const result = JSON.parse(JSON.stringify(grid))
    const m = grid.length
    const n = grid[0].length

    const originalColor = grid[r0][c0]
    if (originalColor === color) return grid

    //判断此点是否为中心  
    function isCenter(y: number, x: number) {

        return (
            y !== 0 && x !== 0 && y !== m - 1 && x !== n - 1 &&
            Math.abs(grid[y - 1][x]) === originalColor &&
            Math.abs(grid[y + 1][x]) === originalColor &&
            Math.abs(grid[y][x - 1]) === originalColor &&
            Math.abs(grid[y][x + 1]) === originalColor
        )
    }

    //获取连通分量，然后判断是否位于连通分量的边界
    function dfs(y: number, x: number) {
        if (grid[y][x] !== originalColor) return //不是目标值
        grid[y][x] *= -1

        if (!isCenter(y, x)) result[y][x] = color

        y > 0 && dfs(y - 1, x)
        y < m - 1 && dfs(y + 1, x)
        x > 0 && dfs(y, x - 1)
        x < n - 1 && dfs(y, x + 1)
    }

    dfs(r0, c0)

    return result
};