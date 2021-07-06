/**
 * @see https://leetcode-cn.com/problems/shortest-bridge/
在给定的二维二进制数组 A 中，存在两座岛。（岛是由四面相连的 1 形成的一个最大组。）

现在，我们可以将 0 变为 1，以使两座岛连接起来，变成一座岛。

返回必须翻转的 0 的最小数目。（可以保证答案至少是 1 。）

 

示例 1：

输入：A = [[0,1],[1,0]]
输出：1
示例 2：

输入：A = [[0,1,0],[0,0,0],[0,0,1]]
输出：2
示例 3：

输入：A = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
输出：1
 

提示：

2 <= A.length == A[0].length <= 100
A[i][j] == 0 或 A[i][j] == 1
 * 
 */
namespace bridge {
    function shortestBridge(grid: number[][]): number {

        const m = grid.length
        const n = grid[0].length

        //深度遍历寻找岛1,//首先获取岛屿1的开始深度遍历坐标
        const stack: number[][] = [(() => {
            for (let x = 0; x < m; x++) {
                for (let y = 0; y < n; y++) {
                    if (grid[x][y] === 1) return [x, y]
                }
            }
        })()!]

        //标记岛屿1为2
        while (stack.length) {
            const [x, y] = stack.pop()!
            grid[x][y] = 2
            const coordinatesList = findAllRound(x, y)
            const len = coordinatesList.length
            //遍历将连在一起的1设置为2
            for (let i = 0; i < len; i++) {
                const [_x, _y] = coordinatesList[i]
                if (grid[_x][_y] === 1) {
                    grid[_x][_y] = 2
                    stack.push([_x, _y])
                }
            }
        }

        //查找四周坐标
        function findAllRound(x: number, y: number) {
            const coordinatesList = []
            //上
            if (x - 1 >= 0) coordinatesList.push([x - 1, y])
            //下
            if (x + 1 < m) coordinatesList.push([x + 1, y])
            //左
            if (y - 1 >= 0) coordinatesList.push([x, y - 1])
            //右
            if (y + 1 < n) coordinatesList.push([x, y + 1])

            return coordinatesList
        }

        //广度遍历，获取岛屿1到岛屿2的距离
        const queue: { pos: number[], dis: number }[] = []
        for (let x = 0; x < m; x++) {
            for (let y = 0; y < n; y++) {
                //此时的岛屿1数字1已经被标记为了2
                if (grid[x][y] === 2) {
                    queue.push({
                        pos: [x, y],
                        dis: 0
                    })
                }
            }
        }

        while (queue.length) {
            const { pos, dis } = queue.shift()!
            const [x, y] = pos

            const nbs = findAllRound(x, y)
            const len = nbs.length
            for (let i = 0; i < len; i++) {
                const [_x, _y] = nbs[i]
                //说明是岛屿1的边界.扩大岛屿1.
                if (grid[_x][_y] === 0) {
                    grid[_x][_y] = 2
                    queue.push({
                        pos: [_x, _y],
                        dis: dis + 1
                    })
                    //说明已经找到了岛屿2
                } else if (grid[_x][_y] === 1) {
                    return dis
                }
            }
        }

        return 0
    };

    const list = [
        [0, 1],
        [1, 0]
    ]
    const list2 = [
        [0, 1, 0],
        [0, 0, 0],
        [0, 0, 1]
    ]
    const list3 = [
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1]
    ]
    const list4 = [
        [1, 1, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1],
        [0, 0, 0, 1, 1]
    ]
    console.log("shortestBridge==>", shortestBridge(list))
    console.log("shortestBridge==>", shortestBridge(list2))
    console.log("shortestBridge2==>", shortestBridge(list3))
    console.log("shortestBridge4==>", shortestBridge(list4))
}
