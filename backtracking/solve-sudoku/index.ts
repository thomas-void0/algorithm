/**
 * 解数独
 * @see https://leetcode-cn.com/problems/sudoku-solver/
 */
function solveSudoku(board: string[][]): void {
    //1，构建一个函数，判断该位置是否合法
    function isValid(row: number, col: number, board: string[][], val: string) {
        //行是否合法
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === val) return false
        }

        //列是否合法
        for (let i = 0; i < 9; i++) {
            if (board[i][col] === val) return false
        }

        //判断3x3的格子是否合法.找到所在格子的左上角的坐标
        const startRow = Math.floor(row / 3) * 3
        const startCol = Math.floor(col / 3) * 3

        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                if (board[i][j] === val) return false
            }
        }

        return true
    }

    function backtracking(board: string[][]) {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                //如果这个位置有数字，那么跳出循环
                if (board[i][j] !== ".") continue
                //如果满足条件，则添加数字
                for (let val = 1; val <= 9; val++) {
                    const strVal = val + ""
                    if (isValid(i, j, board, strVal)) {
                        board[i][j] = strVal
                        //遍历处理新的棋盘
                        if (backtracking(board)) return true
                        //回溯
                        board[i][j] = "."
                    }
                }
                //如果9个数都不能放下，那么直接返回
                return false
            }
        }

        //遍历完成，没有返回false，那么说明找到了结果 
        return true
    }

    backtracking(board)
};