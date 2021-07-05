
/**
 * @see https://leetcode-cn.com/problems/surrounded-regions/
 * 给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' ，找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。


示例 1：

输入：board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
输出：[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
解释：被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O' 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。

示例 2：

输入：board = [["X"]]
输出：[["X"]]

提示：
m == board.length
n == board[i].length
1 <= m, n <= 200
board[i][j] 为 'X' 或 'O'
*/

namespace solve {
    //1. 从矩阵四周出发，向中间逼近。把边界为O并且链接到边界O的O设置为“Y”。
    //2. 将设置好后的数组进行遍历，将O设置为X，将Y设置为O

    function solve(board: string[][]): void {

        const m = board.length
        const n = board[0].length

        //从左边出发 (0,0) (m - 1,0)
        for (let x = 0; x < m; x++) board[x][0] === "O" && bfs(x, 0);
        //从右边出发 (0,n-1) (m - 1,n - 1)
        for (let x = 0; x < m; x++) board[x][n - 1] === "O" && bfs(x, n - 1);
        //从上边出发 (0,0) (0,n - 1)
        for (let y = 0; y < n; y++) board[0][y] === "O" && bfs(0, y);
        //从下边出发 (m - 1,0) (m - 1,n - 1)
        for (let y = 0; y < n; y++) board[m - 1][y] === "O" && bfs(m - 1, y);

        //x:一维数组的索引值
        //y:一维数组值的索引值
        function bfs(x: number, y: number) {
            board[x][y] = "Y" //将边界上的O设置为Y
            const queue = [[x, y]]

            while (queue.length) {

                const [x, y] = queue.shift()!

                //找出当前上下左右四个点的坐标，如果为O就设置为Y
                if (x - 1 >= 0 && board[x - 1][y] === "O") {
                    board[x - 1][y] = "Y"
                    queue.push([x - 1, y])
                }

                if (x + 1 < m && board[x + 1][y] === "O") {
                    board[x + 1][y] = "Y"
                    queue.push([x + 1, y])
                }

                if (y - 1 >= 0 && board[x][y - 1] === "O") {
                    board[x][y - 1] = "Y"
                    queue.push([x, y - 1])
                }

                if (y + 1 < n && board[x][y + 1] === "O") {
                    board[x][y + 1] = "Y"
                    queue.push([x, y + 1])
                }
            }
        }


        //遍历board，将Y设置为O，将O设置为X
        for (let x = 0; x < m; x++) {
            for (let y = 0; y < n; y++) {
                if (board[x][y] === "O") {
                    board[x][y] = "X"
                } else if (board[x][y] === "Y") {
                    board[x][y] = "O"
                }
            }
        }

    };
    let board = [["O"]]
    console.log(board)
    solve(board)
}
