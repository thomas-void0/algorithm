/**
 * N皇后
 * @see https://leetcode-cn.com/problems/n-queens/
 */
function solveNQueens(n: number): string[][] {
    const result: string[][] = []
    //创建一个棋盘
    const chessboard = Array.from({ length: n }, () => new Array(n).fill("."))
    backtracking(0, chessboard, n)
    //首先编写一个函数，用于判断此位置是否能够放置皇后
    function isValid(row: number, col: number, chessboard: string[][], n: number) {
        //检测该位置所在的列是否存在Q
        for (let i = row - 1; i >= 0; i--) {
            if (chessboard[i][col] === "Q") return false
        }

        //检测该位置所在的45度斜线位置是否存在Q
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (chessboard[i][j] === "Q") return false
        }

        //检测该位置所在的135度斜线位置是否存在Q
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (chessboard[i][j] === "Q") return false
        }

        return true
    }

    //根据传入的棋盘进行处理
    function backtracking(row: number, chessboard: string[][], n: number) {
        //终止条件
        if (row === n) {
            return saveResult(chessboard)
        }
        for (let col = 0; col < n; col++) {
            //判断当前行的值是否满足条件
            if (isValid(row, col, chessboard, n)) {
                //处理节点
                chessboard[row][col] = "Q"
                //递归调用下一行
                backtracking(row + 1, chessboard, n)
                //回溯，撤销处理结果
                chessboard[row][col] = "."
            }
        }
    }

    //存储满足条件的值，相当于拷贝一次值
    function saveResult(chessboard: string[][]) {
        const l1 = chessboard.length
        const l2 = chessboard[0].length
        const list = []
        for (let i = 0; i < l1; i++) {
            let str = ''
            for (let j = 0; j < l2; j++) {
                str += chessboard[i][j]
            }
            list.push(str)
        }
        result.push(list)
    }
    return result
};

