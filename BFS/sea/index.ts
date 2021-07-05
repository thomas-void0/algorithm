//太平洋，大西洋水流问题
/**
 * @see https://leetcode-cn.com/problems/pacific-atlantic-water-flow/
给定一个 m x n 的非负整数矩阵来表示一片大陆上各个单元格的高度。“太平洋”处于大陆的左边界和上边界，而“大西洋”处于大陆的右边界和下边界。

规定水流只能按照上、下、左、右四个方向流动，且只能从高到低或者在同等高度上流动。

请找出那些水流既可以流动到“太平洋”，又能流动到“大西洋”的陆地单元的坐标。

提示：

输出坐标的顺序不重要
m 和 n 都小于150

示例：

给定下面的 5x5 矩阵:

  太平洋 ~   ~   ~   ~   ~ 
       ~  1   2   2   3  (5) *
       ~  3   2   3  (4) (4) *
       ~  2   4  (5)  3   1  *
       ~ (6) (7)  1   4   5  *
       ~ (5)  1   1   2   4  *
          *   *   *   *   * 大西洋

返回:

[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (上图中带括号的单元).

 * 解题思路：@see https://leetcode-cn.com/problems/pacific-atlantic-water-flow/solution/shui-wang-gao-chu-liu-by-xiaohu9527-xxsx/
 * 重点是：找出太平洋的水能流动到的地方，以及大西洋的水能流动到的地方。找到2者之间的交汇点，那么这些点的坐标就是满足条件的
 * 
 * 对于一个点它能流动两边的大洋，那么反过来，两边大洋的水反着流就能达到这个点。
 * 尽然水开始倒流了，那么逻辑也需要反过来，因此只有将下一个点比当前的点大时或者等于当前点的高度时，水才能流过去。
 */
namespace pacificAtlantic {
    function pacificAtlantic(heights: number[][]): number[][] {
        const m = heights.length
        const n = heights[0].length
        const result: number[][] = []

        //创建2个二维数组来分别记录，太平洋和大西洋的水可以流过的节点
        const pacific = Array.from({ length: m }, () => new Array(n).fill(-1))
        const atlantic = Array.from({ length: m }, () => new Array(n).fill(0))

        //遍历获取太平洋出发，水能流到的节点，太平洋的边为 [x = 0, y = n - 1]; [x = m - 1,y = 0],[0,0]这三点构成的线段
        for (let x = 0; x < m; x++) pacificBfs(x, 0);
        for (let y = 0; y < n; y++) pacificBfs(0, y);

        //遍历获取大西洋出发，水能流到的节点，大西洋的边为 [x = m - 1,y = 0];[x = m - 1,y = n - 1],[x = 0, y = n - 1]这三点构成的线段
        for (let x = 0; x < m; x++) atlanticBfs(x, n - 1);
        for (let y = 0; y < n; y++) atlanticBfs(m - 1, y);

        // //x：一维数组的索引值
        // //y：一维数组中值的索引值
        // //遍历查找太平洋比当前节点大的节点，每消费一个节点那么就将此节点设置为消费.
        function pacificBfs(x: number, y: number) {
            const queue = [[x, y]]
            while (queue.length) {
                const [x, y] = queue.shift()!
                const current = heights[x][y]
                pacific[x][y] = 1 //访问过的节点置为已经访问

                //查找上下左右4个点，比当前节点大就继续。
                const minSafeNumber = Number.MIN_SAFE_INTEGER
                const top = y - 1 >= 0 ? heights[x][y - 1] : minSafeNumber
                const bottom = y + 1 < n ? heights[x][y + 1] : minSafeNumber
                const left = x - 1 >= 0 ? heights[x - 1][y] : minSafeNumber
                const right = x + 1 < m ? heights[x + 1][y] : minSafeNumber

                //如果此坐标没有被标记过，同时大于当前节点。那么说明水可以流向此处。加入到队列中，进行下一次查找
                if (top >= current && pacific[x][y - 1] !== 1) {
                    queue.push([x, y - 1]);
                    pacific[x][y - 1] = 1
                }
                if (bottom >= current && pacific[x][y + 1] !== 1) {
                    queue.push([x, y + 1]);
                    pacific[x][y + 1] = 1
                }
                if (left >= current && pacific[x - 1][y] !== 1) {
                    queue.push([x - 1, y]);
                    pacific[x - 1][y] = 1
                }
                if (right >= current && pacific[x + 1][y] !== 1) {
                    queue.push([x + 1, y]);
                    pacific[x + 1][y] = 1
                }
            }
        }

        //同上，遍历查找大西洋
        function atlanticBfs(x: number, y: number) {
            const queue = [[x, y]]
            while (queue.length) {
                const [x, y] = queue.shift()!
                const current = heights[x][y]
                atlantic[x][y] = 1 //访问过的节点置为已经访问

                //查找上下左右4个点，比当前节点大就继续。
                const minSafeNumber = Number.MIN_SAFE_INTEGER
                const top = y - 1 >= 0 ? heights[x][y - 1] : minSafeNumber
                const bottom = y + 1 < n ? heights[x][y + 1] : minSafeNumber
                const left = x - 1 >= 0 ? heights[x - 1][y] : minSafeNumber
                const right = x + 1 < m ? heights[x + 1][y] : minSafeNumber

                //如果此坐标没有被标记过，同时大于当前节点。那么说明水可以流向此处。加入到队列中，进行下一次查找
                if (top >= current && atlantic[x][y - 1] !== 1) {
                    queue.push([x, y - 1]);
                    atlantic[x][y - 1] = 1
                }
                if (bottom >= current && atlantic[x][y + 1] !== 1) {
                    queue.push([x, y + 1]);
                    atlantic[x][y + 1] = 1
                }
                if (left >= current && atlantic[x - 1][y] !== 1) {
                    queue.push([x - 1, y]);
                    atlantic[x - 1][y] = 1
                }
                if (right >= current && atlantic[x + 1][y] !== 1) {
                    queue.push([x + 1, y]);
                    atlantic[x + 1][y] = 1
                }
            }
        }

        //遍历二维数组,求取二维数组中太平洋和大西洋想交叉的点的坐标。即可取得结果
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                pacific[i][j] === atlantic[i][j] && result.push([i, j])
            }
        }

        return result
    };

    const list = [[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]]
    const list2 = [[10, 10, 10], [10, 1, 10], [10, 10, 10]]
    console.log("result1:", pacificAtlantic(list))
    console.log("result2:", pacificAtlantic(list2))
}


