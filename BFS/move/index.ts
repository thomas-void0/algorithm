/**
 * @see https://leetcode-cn.com/problems/number-of-enclaves/
 * [
 * [0, 0, 0, 0], 
 * [1, 0, 1, 0], 
 * [0, 1, 1, 0], 
 * [0, 0, 0, 0]
 * ]
 * 
 * [
 * [0,1,1,0],
 * [0,0,1,0],
 * [0,0,1,0],
 * [0,0,0,0]
 * ]
 * [0, 1, 1, 0], 
 * [0, 0, 1, 0], 
 * [0, 0, 1, 0], 
 * [0, 0, 0, 0]
 */
namespace move {
    //从4条边出发，找到找到一个满足条件的1的时候。就把这个1设置为2，最后遍历数组剩下多少个1就返回多少个
    function numEnclaves(grid: number[][]): number {
        const m = grid.length
        const n = grid[0].length

        let num = 0
        //左上顶点，左下顶点2点构成的边
        for (let x = 0; x < m; x++) grid[x][0] === 1 && bfs(x, 0);
        //左下顶点，右下顶点2点构成的边
        for (let y = 0; y < n; y++) grid[m - 1][y] === 1 && bfs(m - 1, y);
        //右下顶点，右上顶点2点构成的边
        for (let x = 0; x < m; x++) grid[x][n - 1] === 1 && bfs(x, n - 1);
        //右上顶点，左上顶点2点构成的边
        for (let y = 0; y < n; y++) grid[0][y] === 1 && bfs(0, y);

        //查找传入陆地坐标的附近是否链接着陆地,将链接到一起到陆地设置为2
        function bfs(x: number, y: number) {
            const queue = [[x, y]]
            grid[x][y] = 2
            while (queue.length) {
                const [x, y] = queue.shift()!

                //上
                if (x - 1 >= 0 && grid[x - 1][y] === 1) {
                    grid[x - 1][y] = 2
                    queue.push([x - 1, y])
                }

                //下
                if (x + 1 < m && grid[x + 1][y] === 1) {
                    grid[x + 1][y] = 2
                    queue.push([x + 1, y])
                }

                //左
                if (y - 1 >= 0 && grid[x][y - 1] === 1) {
                    grid[x][y - 1] = 2
                    queue.push([x, y - 1])
                }

                //右
                if (y + 1 < n && grid[x][y + 1] === 1) {
                    grid[x][y + 1] = 2
                    queue.push([x, y + 1])
                }
            }
        }

        //查看数组中还剩下了几个1
        for (let x = 0; x < m; x++) {
            for (let y = 0; y < n; y++) {
                grid[x][y] === 1 && num++
            }
        }

        return num
    };

    console.log("111==>", numEnclaves([[0, 0, 0, 0], [1, 0, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]]))
    console.log("222==>", numEnclaves([[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 0]]))
}