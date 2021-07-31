/**
 * 扫雷游戏
 * @see https://leetcode-cn.com/problems/minesweeper/
 * 1，如果点击的不是炸弹，那么递归周围找到炸弹周围的数字。然后把数字显示出来
 * 2，如果是炸弹，点击的炸弹改成X。return
 */
function updateBoard(board: string[][], click: number[]): string[][] {

    const m = board.length
    const n = board[0].length

    const direction = [[-1, 0], [-1, - 1], [0, -1], [1, -1], [0, 1], [1, 1], [1, 0], [-1, 1]]

    const [y, x] = click

    //判断是否为雷
    if (board[y][x] === "M") {
        board[y][x] = "X"
        return board
    }


    function dfs(y: number, x: number) {
        //已经是翻牌的状态
        if (board[y][x] !== "E") return

        let num = 0

        //检测周围环境有几个地雷
        for (let i = 0; i < direction.length; i++) {
            const [_y, _x] = direction[i]
            const y1 = y + _y
            const x1 = x + _x

            if (y1 >= 0 && y1 < m && x1 >= 0 && x1 < n) {
                board[y1][x1] === "M" && num++
            }
        }

        board[y][x] = `${num}`
        if (board[y][x] === "0") {
            board[y][x] = "B"
            for (let i = 0; i < direction.length; i++) {
                const [_y, _x] = direction[i]
                const y1 = y + _y
                const x1 = x + _x

                if (y1 >= 0 && y1 < m && x1 >= 0 && x1 < n) {
                    dfs(y1, x1)
                }
            }
        }
    }

    dfs(y, x)

    return board
};