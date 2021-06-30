/**
给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。

示例 1：

输入：grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
输出：1
示例 2：

输入：grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
输出：3
 

提示：

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] 的值为 '0' 或 '1'、


//题目描述的意思，实际上就是查找一整块的1有多少个
 */

function numIslands(grid: string[][]): number {
    //要查找一整块的1，使用BFS的方式。即广度优先遍历
    let num = 0
    const queue:number[][] = []
    const m = grid.length
    const n = grid[0].length

    function addQueue([x, y]: number[]) {
        // x是一维数组的索引
        // y是一维数组的元素索引
        if (x >= 0 && x < m && y >= 0 && y < n) {
            if (grid[x][y] !== "1") return
            queue.push([x, y]) //一直添加符合条件的到栈中。这样能够一直感染到附近为1的区域，最终形成一整块
            grid[x][y] = "2"
        }
    }

    //遍历找到满足陆地要求的节点
    grid.forEach((item, i) => {
        item.forEach((element,j) => {
            if (element !== '1') return
            queue.push([i, j])
            item[j] = '2' //已经消费过的节点置为'2'防止被重复消费
            //查找满足条件的节点周围的环境
            while (queue.length > 0) {
                const [x, y] = queue.shift()!
                //获取周围环境的4个点
                const top = [x - 1,y]
                const right = [x, y + 1]
                const bottom = [x + 1, y]
                const left = [x, y - 1]
                
                addQueue(top)
                addQueue(right)
                addQueue(bottom)
                addQueue(left)
            }
            //这一整块执行完毕，说明找到了一个满足条件的‘1’模块
            num++
        })
    })


    return num
};

const grid1 = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]
const grid3 = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
]
const grid2 = [["1","1"]]
console.log("num1:",numIslands(grid1))
console.log("num2:", numIslands(grid2))
console.log("num3:",numIslands(grid3))
