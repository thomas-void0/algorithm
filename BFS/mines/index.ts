/**
 * 
 * @see https://leetcode-cn.com/problems/minesweeper/
让我们一起来玩扫雷游戏！

给定一个代表游戏板的二维字符矩阵。 'M' 代表一个未挖出的地雷，'E' 代表一个未挖出的空方块，'B' 代表没有相邻（上，下，左，右，和所有4个对角线）地雷的已挖出的空白方块，数字（'1' 到 '8'）表示有多少地雷与这块已挖出的方块相邻，'X' 则表示一个已挖出的地雷。

现在给出在所有未挖出的方块中（'M'或者'E'）的下一个点击位置（行和列索引），根据以下规则，返回相应位置被点击后对应的面板：

如果一个地雷（'M'）被挖出，游戏就结束了- 把它改为 'X'。
如果一个没有相邻地雷的空方块（'E'）被挖出，修改它为（'B'），并且所有和其相邻的未挖出方块都应该被递归地揭露。
如果一个至少与一个地雷相邻的空方块（'E'）被挖出，修改它为数字（'1'到'8'），表示相邻地雷的数量。
如果在此次点击中，若无更多方块可被揭露，则返回面板。
 

示例 1：

输入: 

[['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'M', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E']]

Click : [3,0]

输出: 

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'M', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]

解释:

示例 2：

输入: 

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'M', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]

Click : [1,2]

输出: 

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'X', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]

解释:

 

注意：

输入矩阵的宽和高的范围为 [1,50]。
点击的位置只能是未被挖出的方块 ('M' 或者 'E')，这也意味着面板至少包含一个可点击的方块。
输入面板不会是游戏结束的状态（即有地雷已被挖出）。
简单起见，未提及的规则在这个问题中可被忽略。例如，当游戏结束时你不需要挖出所有地雷，考虑所有你可能赢得游戏或标记方块的情况。


 */

namespace updateBoard {
    function updateBoard(board: string[][], click: number[]): string[][] {

        //如果一来点击的就是炸弹那么直接返回
        const [x, y] = click
        if (board[x][y] === "M") {
            board[x][y] = "X"
            return board
        }

        const m = board.length
        const n = board[0].length

        //创建一个以点击点为圆心的8个方向列表，用于后续对点进行扩散查找
        const direction = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]]
        const dLen = direction.length

        //判断是否为雷
        function isMine(x: number, y: number) {
            //查看此坐标是否为M
            return x >= 0 && x < m && y >= 0 && y < n && board[x][y] === "M" ? 1 : 0
        }

        //探索方向
        function explore(x: number, y: number): string {
            let num = 0
            for (let i = 0; i < dLen; i++) {
                const [_x, _y] = direction[i]
                num += isMine(x + _x, y + _y)
            }
            return `${num}`
        }

        //创建一个队列
        const queue: number[][] = [click]
        while (queue.length) {
            const [x, y] = queue.shift()!

            if (x < 0 || x >= m || y < 0 || y >= n) continue //不满足条件的坐标直接跳过本次循环

            //如果是炸弹或者已经翻开了的坐标，那么直接跳过
            if (board[x][y] !== "E") continue

            //对点击点的四个方向进行探索
            board[x][y] = explore(x, y)
            //如果周围没有雷，说明周围可以被翻开，那么继续扩散翻牌
            if (board[x][y] === "0") {
                board[x][y] = "B" //被翻牌
                //将该坐标的周围的点进行扩散查找
                for (let i = 0; i < dLen; i++) {
                    const [_x, _y] = direction[i]
                    queue.push([x + _x, y + _y])
                }
            }

        }

        return board
    };
    const list = [["E", "E", "E", "E", "E"], ["E", "E", "M", "E", "E"], ["E", "E", "E", "E", "E"], ["E", "E", "E", "E", "E"]]
    const click = [3, 0]
    console.log("updateBoard=>", updateBoard(list, click))
}
