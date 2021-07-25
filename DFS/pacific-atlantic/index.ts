/**
 * 太平洋大西洋水流问题
 * @see https://leetcode-cn.com/problems/pacific-atlantic-water-flow/
 */
function pacificAtlantic(heights: number[][]): number[][] {
    const result: number[][] = []
    const m = heights.length
    const n = heights[0].length
    const used1 = Array.from({ length: m }, () => new Array(n).fill(0))
    const used2 = Array.from({ length: m }, () => new Array(n).fill(0))

    //从太平洋出发
    for (let y = 0; y < m; y++) {
        dfs(y, 0, heights[y][0], used1)
    }
    for (let x = 0; x < n; x++) {
        dfs(0, x, heights[0][x], used1)
    }

    //从大西洋出发
    for (let y = 0; y < m; y++) {
        dfs(y, n - 1, heights[y][n - 1], used2)
    }
    for (let x = n - 1; x >= 0; x--) {
        dfs(m - 1, x, heights[m - 1][x], used2)
    }

    function dfs(y: number, x: number, height: number, used: number[][]) {
        //如果坐标越界，直接返回
        if (y < 0 || x < 0 || y >= m || x >= n) return

        //如果已经被标记过了，那么直接返回
        if (used[y][x] >= 1) return

        //如果此点小于元素，那么说明此处水流不通，那么直接返回
        const val = heights[y][x]
        if (val < height) return

        used[y][x]++
        //继续检测四周
        dfs(y - 1, x, val, used)
        dfs(y + 1, x, val, used)
        dfs(y, x - 1, val, used)
        dfs(y, x + 1, val, used)
    }

    //遍历添加坐标
    for (let y = 0; y < m; y++) {
        for (let x = 0; x < n; x++) {
            if (used1[y][x] + used2[y][x] === 2) {
                result.push([y, x])
            }
        }
    }
    return result
};

