/**
 * @see https://leetcode-cn.com/problems/number-of-closed-islands/
 * [
 * [1,1,1,1,1,1,1,0],
 * [1,0,0,0,0,1,1,0],
 * [1,0,1,0,1,1,1,0],
 * [1,0,0,0,0,1,0,1],
 * [1,1,1,1,1,1,1,0]
 * ]
 */
namespace closedIsland {
    //使用染色法，将所有边界上连接到一起的岛屿都修改为水域。剩下来的没有链接到一起的，就是封闭岛屿
    function closedIsland(grid: number[][]): number {
        let num = 0

        const m = grid.length
        const n = grid[0].length

        for (let x = 0; x < m; x++) grid[x][0] === 0 && bfs(x, 0);//左边
        for (let x = 0; x < m; x++) grid[x][n - 1] === 0 && bfs(x, n - 1);//右边
        for (let y = 0; y < n; y++) grid[0][y] === 0 && bfs(0, y);//上边
        for (let y = 0; y < n; y++) grid[m - 1][y] === 0 && bfs(m - 1, y)//下边


        function bfs(x: number, y: number) {
            const queue = [[x, y]]
            while (queue.length) {
                const [x, y] = queue.shift()!
                grid[x][y] = 1
                searchNeighbor(x, y, 1, queue)
            }
        }

        //将找到的岛屿1进行染色，每深度染色一次。就说明找到了一块岛屿
        function dfs(x: number, y: number) {
            const stack = [[x, y]]
            grid[x - 1][y] = 2
            while (stack.length) {
                const [x, y] = stack.pop()!
                searchNeighbor(x, y, 2, stack)
            }
            num++
        }

        //寻找上下左右的相邻点，满足条件的加入到队列或者栈中
        function searchNeighbor(
            x: number,
            y: number,
            tag: number,
            list: number[][]
        ) {
            //上
            if (x - 1 >= 0 && grid[x - 1][y] === 0) {
                grid[x - 1][y] = tag
                list.push([x - 1, y])
            }
            //下
            if (x + 1 < m && grid[x + 1][y] === 0) {
                grid[x + 1][y] = tag
                list.push([x + 1, y])
            }
            //左
            if (y - 1 >= 0 && grid[x][y - 1] === 0) {
                grid[x][y - 1] = tag
                list.push([x, y - 1])
            }
            //右
            if (y + 1 < n && grid[x][y + 1] === 0) {
                grid[x][y + 1] = tag
                list.push([x, y + 1])
            }
        }

        //进行一波深度优先遍历
        for (let x = 0; x < m; x++) {
            for (let y = 0; y < n; y++) {
                grid[x][y] === 0 && dfs(x, y)
            }
        }

        return num
    };

    console.log("==>", closedIsland([[1, 1, 1, 1, 1, 1, 1, 0], [1, 0, 0, 0, 0, 1, 1, 0], [1, 0, 1, 0, 1, 1, 1, 0], [1, 0, 0, 0, 0, 1, 0, 1], [1, 1, 1, 1, 1, 1, 1, 0]]))
}
