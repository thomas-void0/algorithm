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
// function letterCombinations(digits: string): string[] {
//     //1,创建映射数组
//     const config = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
//     //2,判断0，1的情况
//     if (digits === "0" || digits === "1" || digits === "") return []

//     const result: string[] = []
//     const path: string[] = []

//     //3，获取传入参数对应的字符数组
//     const list = []
//     for (let i = 0; i < digits.length; i++) {
//         const key = digits[i]
//         list.push(config[+key])
//     }

//     //4，进行组合
//     function backtracking(startIndex: number, list: string[]) {
//         //满足条件直接加入到结果
//         if (path.length === digits.length) {
//             result.push(path.join(""))
//             return
//         }
//         const len = list[startIndex].length

//         for (let i = 0; i < len; i++) {

//             path.push(list[startIndex][i])

//             //这里每一项执行的都是下一轮的数组，所以是startIndex + 1
//             backtracking(startIndex + 1, list)

//             path.pop()
//         }
//     }

//     backtracking(0, list)

//     return result
// };
/**
 *
function permuteUnique(nums: number[]): number[][] {
    const result: number[][] = []
    const path: number[] = []
    //去重
    const used = new Array(nums.length).fill(false)

    function backtracking(list: number[]) {
        //终止条件
        if (path.length === list.length) {
            result.push(path.slice())
            return
        }

        //遍历
        for (let i = 0; i < list.length; i++) {
            //去重
            if (i > 0 && list[i] === list[i - 1] && used[i - 1] === false) continue

            if (used[i] === false) {
                path.push(list[i])
                used[i] = true
                backtracking(list)

                path.pop()
                used[i] = false
            }


        }
    }

    backtracking(nums.sort((a, b) => a - b))

    return result
};
 */

// function test(nums: number[]): number[][] {
//     const result: number[][] = []
//     const path: number[] = []
//     const used = new Array(nums.length).fill(false)

//     function backtracking(list: number[]) {
//         if (path.length === list.length) {
//             result.push(path.slice())
//             return
//         }
//         for (let i = 0; i < list.length; i++) {
//             if (i > 0 && used[i - 1] === false && list[i] === list[i - 1]) {
//                 continue
//             }
//             if (used[i] === false) {
//                 path.push(list[i])
//                 used[i] = true

//                 backtracking(list)
//                 used[i] = false
//                 path.pop()
//             }

//         }
//     }

//     backtracking(nums.sort((a, b) => a - b))

//     return result
// }

// function combinationSum(candidates: number[], target: number): number[][] {
//     const result: number[][] = []
//     const path: number[] = []
//     let sum = 0

//     function backtracking(list: number[], startIndex: number) {
//         if (sum === target) {
//             result.push(path.slice())
//             return
//         }

//         //进行剪枝操作
//         for (let i = startIndex; i < list.length && (sum + list[i] <= target); i++) {

//             //统一树枝可以重复选取
//             path.push(list[i])
//             sum += list[i]
    ·
//             backtracking(list, i)
//             path.pop()
//             sum -= list[i]
//         }
//     }

//     backtracking(candidates, 0)

//     return result
// }

// function subsets(nums: number[]): number[][] {
//     const result: number[][] = []
//     const path: number[] = []

//     function backtracking(startIndex: number, list: number[]) {
//         result.push(path.slice())

//         for (let i = startIndex; i < list.length; i++) {
//             path.push(list[i])
//             backtracking(i + 1, list)
//             path.pop()
//         }
//     }

//     backtracking(0, nums)
//     return result
// }
/**
 * 4，k
 */
// function combine(n: number, k: number): number[][] {
//     const result: number[][] = []
//     const path: number[] = []

//     function backtracking(startIndex: number) {
//         if (path.length === k) {
//             result.push(path.slice())
//             return
//         }

//         for (let i = startIndex; i <= n; i++) {
//             path.push(i)
//             backtracking(i + 1)
//             path.pop()
//         }
//     }

//     backtracking(1)

//     return result
// }
//candidates = [10,1,2,7,6,1,5], target = 8,
// function combinationSum2(candidates: number[], target: number): number[][] {

//     if (candidates.length === 0) return []

//     candidates = candidates.sort((a, b) => a - b)

//     const result: number[][] = []
//     const path: number[] = []
//     let sum = 0
//     const len = candidates.length

//     const used = new Array(candidates.length).fill(false)

//     function backtracking(startIndex: number) {
//         if (sum === target) {
//             result.push(path.slice())
//             return
//         }

//         for (let i = startIndex; i < len; i++) {

//             //判断是否跳过
//             if (sum + candidates[i] > target) continue
//             if (i > 0 && candidates[i] === candidates[i - 1] && used[i - 1] === false) continue

//             used[i] = true
//             path.push(candidates[i])
//             sum += candidates[i]

//             backtracking(i + 1)

//             used[i] = false
//             path.pop()
//             sum -= candidates[i]
//         }
//     }

//     backtracking(0)

//     return result
// };

// function subsets(nums: number[]): number[][] {
//     if (nums.length === 0) return []
//     const result: number[][] = []
//     const path: number[] = []

//     function backtracking(startIndex: number) {

//         if (startIndex > nums.length) return

//         result.push(path.slice())

//         for (let i = startIndex; i < nums.length; i++) {
//             path.push(nums[i])

//             backtracking(i + 1)

//             path.pop()
//         }


//     }

//     backtracking(0)

//     return result
// };
// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.left = (left === undefined ? null : left)
//         this.right = (right === undefined ? null : right)
//     }
// }
// function createTree(list: number[], root: TreeNode | null) {

//     if (root === null) {
//         root = new TreeNode()
//     }

//     const queue = [...list]
//     const treeQueue = [root]

//     while (queue.length) {
//         const val = queue.shift()! // 1
//         const node = treeQueue.shift()! //root 
//         if (node && val) {
//             node.val = val
//         }

//         if (queue.length) {
//             node.left = new TreeNode()
//             node.right = new TreeNode()
//             treeQueue.push(node.left)
//             treeQueue.push(node.right)
//         }
//     }

//     return root
// }

// console.log("createTree==>", createTree([1, 2, 3, 4, 5], null))
/**
 * 
 * [
 * [0,0,1,0,0,0,0,1,0,0,0,0,0],
 * [0,0,0,0,0,0,0,1,1,1,0,0,0],
 * [0,1,1,0,1,0,0,0,0,0,0,0,0],
 * [0,1,0,0,1,1,0,0,1,0,1,0,0],
 * [0,1,0,0,1,1,0,0,1,1,1,0,0],
 * [0,0,0,0,0,0,0,0,0,0,1,0,0],
 * [0,0,0,0,0,0,0,1,1,1,0,0,0],
 * [0,0,0,0,0,0,0,1,1,0,0,0,0]
 * ]
 */

function maxAreaOfIsland(grid: number[][]): number {
    let num = 0
    const m = grid.length
    const n = grid[0].length
    let result = 0

    //去重，避免重复计数
    const used: boolean[][] = Array.from({ length: m }, () => new Array(n).fill(false))

    function bfs(y: number, x: number) {
        //判断坐标是否满足要求
        if (y < 0 || x < 0 || y >= m || x >= n || used[y][x]) return false
        if (grid[y][x] === 0) return false

        //如果是陆地
        used[y][x] = true
        num++

        //查找这个点的其他方向
        bfs(y - 1, x) || bfs(y + 1, x) || bfs(y, x - 1) || bfs(y, x + 1)
    }

    for (let y = 0; y < m; y++) {
        for (let x = 0; x < n; x++) {
            if (grid[y][x] === 1 && used[y][x] === false) {
                bfs(y, x)
                result = Math.max(result, num)
                num = 0//重置
            }
        }
    }

    return result
};