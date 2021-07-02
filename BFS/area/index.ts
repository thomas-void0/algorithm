/**
 * @see https://leetcode-cn.com/problems/max-area-of-island/
 * 给定一个包含了一些 0 和 1 的非空二维数组 grid 。

一个 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在水平或者竖直方向上相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。

找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为 0 。)


[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
对于上面这个给定矩阵应返回 6。注意答案不应该是 11 ，因为岛屿只能包含水平或垂直的四个方向的 1 。

示例 2:

[[0,0,0,0,0,0,0,0]]
对于上面这个给定的矩阵, 返回 0。
 */
namespace maxAreaOfIsland{
    function maxAreaOfIsland(grid: number[][]): number {
        const m = grid.length
        const n = grid[0].length
        let currnetNum = 0 //当前查找中的岛屿面积
        let max = 0 //最大的岛屿面积
        //创建一个队列
        const queue:number[][] = []
        //遍历二维数组，找到为1的元素
        for (let i = 0; i < m;i++){
            for (let j = 0; j < n; j++) {
                currnetNum = 0//重置下一块岛屿的面积初始值
                if (grid[i][j] === 1) {
                    currnetNum++ //面积+1
                    grid[i][j] = 2 //已经被使用过了，防止被重复使用
                    //以x,作为一维数组坐标，y，作为值的坐标
                    queue.push([i, j])
                    while (queue.length) {
                        const [x,y] = queue.shift()!
                        //继续查找与1相关的周围环境
                        bfs(x,y - 1)
                        bfs(x,y + 1)
                        bfs(x - 1,y)
                        bfs(x + 1, y)
                    }
                    max < currnetNum && (max = currnetNum) 
                }
            }
        }
    
        function bfs(x: number, y: number) {
            //如果坐标没有超过界限，检测是否为陆地1,则进行处理
            if (x < m && x >=0 && y < n && y >= 0) {
                const current = grid[x][y]
                if (current === 1) {
                    grid[x][y] = 2
                    queue.push([x, y])
                    currnetNum++
                }
            }
        }
        
        return max
    };    
}
