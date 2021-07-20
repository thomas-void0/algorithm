// function permute(nums: number[]): number[][] {
//     const result: number[][] = []
//     const path: number[] = []
//     const used = new Array(nums.length).fill(false)

//     function backtracking(nums: number[]) {
//         if (path.length === nums.length) {
//             console.log('paht==>', ...path)
//             return result.push(path.slice())
//         }

//         for (let i = 0; i < nums.length; i++) {
//             if (used[i]) {
//                 console.log("跳过了数字：", nums[i])
//                 continue
//             }

//             path.push(nums[i])
//             used[i] = true
//             console.log('paht开始添加==>', ...path)
//             console.log("used开始设置==>", ...used)

//             backtracking(nums)

//             path.pop()
//             used[i] = false
//             console.log('paht pop==>', ...path)
//             console.log("used 重置==>", ...used)
//         }
//     }

//     backtracking(nums)

//     return result
// };
// function solveSudoku(board: string[][]): void {
//     //1,编写验证函数
//     function isValid(row: number, col: number, board: string[][], val: string) {
//         //判断行
//         for (let i = 0; i < 9; i++) {
//             if (board[row][i] === val) return false
//         }
//         //判断列
//         for (let i = 0; i < 9; i++) {
//             if (board[i][col] === val) return false
//         }
//         //判断所处的九宫格区域
//         const startRow = Math.floor(row / 3) * 3
//         const startCol = Math.floor(col / 3) * 3
//         for (let i = startRow; i < startRow + 3; i++) {
//             for (let j = startCol; j < startCol + 3; j++) {
//                 if (board[i][j] === val) return false
//             }
//         }

//         return true
//     }

//     //2,编写回溯算法,因为无需返回结果，所以只需要一直遍历到最后，那么board就是想要的结果
//     function backtracking(board: string[][]) {
//         //因为是二维数组，所以需要两次遍历才能取到值
//         for (let i = 0; i < 9; i++) {
//             for (let j = 0; j < 9; j++) {
//                 //判断该位置是否已经存在数字
//                 if (board[i][j] !== '.') continue
//                 //查找9个数字，在该位置是否满足
//                 for (let val = 1; val <= 9; val++) {
//                     const strValue = val + ""
//                     if (isValid(i, j, board, strValue)) {
//                         board[i][j] = strValue
//                         //递归填充了新数字的九宫格
//                         if (backtracking(board)) return true
//                         //如果当前填充的值不满足条件，那么执行回溯撤销
//                         board[i][j] = "."
//                     }
//                 }
//                 //如果9个数字在此处都不行，那么直接返回false
//                 return false
//             }
//         }
//         //全部遍历完成，说明得到了结果。直接返回
//         return true
//     }

//     backtracking(board)
// };
