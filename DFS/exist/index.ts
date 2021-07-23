/**
 * 单词搜索
 * @see https://leetcode-cn.com/problems/word-search/
 * "ABCB"
 * [
 * ["A","B","C","E"],
 * ["S","F","C","S"],
 * ["A","D","E","E"]
 * ]
 * 
 * "ABCCED"
 * [
 *  ["A","B","C","E"],
 *  ["S","F","C","S"],
 *  ["A","D","E","E"]
 * ]
 * 
 * [
 * ["A","B","C","E"],
 * ["S","F","C","S"],
 * ["A","D","E","E"]
 * ]
 */
function exist(board: string[][], word: string): boolean {
    //首先找到第一个字符，然后以其为圆心进行深度优先查找。如果找到了就返回true。没有找到的话，就退出。查找第二个满足条件的字符。继续前面的步骤
    const m = board.length
    const n = board[0].length

    //创建一个数组用于去重
    const used = Array.from({ length: m }, () => new Array(n).fill(false))

    //进行递归处理
    function dfs(y: number, x: number, index: number): boolean {

        if (index === word.length) {
            return true
        }

        if (y < 0 || x < 0 || y >= m || x >= n || used[y][x]) {
            return false
        }

        if (word[index] !== board[y][x]) {
            return false
        }

        used[y][x] = true
        //进行上下左右的查找，上下左右都需要递归才行
        const bool = dfs(y - 1, x, index + 1) || dfs(y + 1, x, index + 1) || dfs(y, x - 1, index + 1) || dfs(y, x + 1, index + 1)
        if (bool) return bool
        used[y][x] = false
        return false
    }

    //查找第一个字符
    for (let y = 0; y < m; y++) {
        for (let x = 0; x < n; x++) {
            if (board[y][x] === word[0] && dfs(y, x, 0)) {
                return true
            }
        }
    }

    return false
};
