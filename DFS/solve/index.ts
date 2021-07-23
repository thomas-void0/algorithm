/**
 * 被围绕的区域
 * @see https://leetcode-cn.com/problems/surrounded-regions/
 *[
     ["X","O","X","O","X","O"],
     ["O","X","O","X","O","X"],
     ["X","O","X","O","X","O"],
     ["O","X","O","X","O","X"]
    ]
 * 
 */
function solve(board: string[][]): void {
    //创建一个对比数组，用于记录无须修改的O
    //从四条边出发，深度遍历与边上的O相邻的O，将其在对比数组中设置为true。
    //最后遍历二维数组board，将所有的O先设置为X，

    const m = board.length
    const n = board[0].length
    const used = Array.from({ length: m }, () => new Array(n).fill(false))

    //从左边出发
    for (let y = 0; y < m; y++) {
        if (board[y][0] === "O" && used[y][0] === false) dfs(y, 0)
    }

    //从上边出发
    for (let x = 0; x < n; x++) {
        if (board[0][x] === "O" && used[0][x] === false) dfs(0, x)
    }

    //从右边出发
    for (let y = 0; y < m; y++) {
        if (board[y][n - 1] === "O" && used[y][n - 1] === false) dfs(y, n - 1)
    }

    //从下边出发
    for (let x = n - 1; x >= 0; x--) {
        if (board[m - 1][x] === "O" && used[m - 1][x] === false) dfs(m - 1, x)
    }

    function dfs(y: number, x: number) {
        //如果越界或者已经被使用过了
        if (y < 0 || x < 0 || y >= m || x >= n || used[y][x]) return
        //如果这一项不是O，那么直接返回
        if (board[y][x] !== "O") return

        //将对比数组中这一项设置为true
        used[y][x] = true
        //查找上下左右4个方向
        dfs(y - 1, x)
        dfs(y + 1, x)
        dfs(y, x - 1)
        dfs(y, x + 1)
    }

    //遍历修改结果
    for (let y = 0; y < m; y++) {
        for (let x = 0; x < n; x++) {
            if (board[y][x] === "O" && used[y][x] === false) {
                board[y][x] = "X"
            }
        }
    }
};