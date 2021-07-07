/**
 * @see https://leetcode-cn.com/problems/coloring-a-border/
 * [
 * [1,2,2],
 * [2,3,2]
 * ]
 * [1, 2, 1], 
 * [1, 2, 2], 
 * [2, 2, 1]
 * 
 * [
 * [1,1,1,2,2],
 * [2,1,2,2,2]
 * [1,1,2,2,1]
 * ]
 */
namespace border {
    //找到链接起来的每一个点，如果满足不是中心点的条件。那么就将此点改变颜色，如此往复
    function colorBorder(grid: number[][], r0: number, c0: number, color: number): number[][] {

        const originColor = grid[r0][c0];
        //如果着色颜色相同，那么直接返回
        if (originColor === color) return grid;
        //克隆一个数组用于存放最终的结果
        const cloneGride = JSON.parse(JSON.stringify(grid));

        const _y = grid.length - 1;
        const _x = grid[0].length - 1;

        //判断一个点是否为中心
        function isCenter(y: number, x: number) {
            return x !== 0 && x !== _x && y !== 0 && y !== _y &&
                Math.abs(grid[y - 1][x]) === originColor &&
                Math.abs(grid[y + 1][x]) === originColor &&
                Math.abs(grid[y][x - 1]) === originColor &&
                Math.abs(grid[y][x + 1]) === originColor
        }


        function dfs(y: number, x: number) {
            //如果这个点被访问过，那么置为负数。下次不再进入循环
            if (grid[y][x] !== originColor) return;
            grid[y][x] *= -1;
            //除了中心以外的点都改变颜色
            !isCenter(y, x) && (cloneGride[y][x] = color);

            y > 0 && dfs(y - 1, x);
            x > 0 && dfs(y, x - 1);
            x < _x && dfs(y, x + 1);
            y < _y && dfs(y + 1, x);
        }

        dfs(r0, c0)
        return cloneGride;
    };

    // // console.log("test==>", colorBorder([[1, 1, 1], [1, 1, 1], [1, 1, 1]], 0, 0, 3))
    // // console.log("test2==>", colorBorder([[1, 2, 1], [1, 2, 2], [2, 2, 1]], 1, 1, 2))
    // // console.log("test3==>", colorBorder([[1, 1, 1, 2, 2], [2, 1, 2, 2, 2], [1, 1, 2, 2, 1]], 1, 0, 1))
    // console.log("test4==>", colorBorder([[1, 2, 1, 2, 1, 2], [2, 2, 2, 2, 1, 2], [1, 2, 2, 2, 1, 2]], 1, 3, 1))
    console.log("test5==>", colorBorder([[1, 1, 2, 2, 3], [3, 1, 2, 2, 1], [1, 1, 2, 3, 2], [1, 1, 1, 1, 2], [1, 2, 1, 1, 2], [2, 3, 3, 2, 1], [2, 1, 2, 1, 3]], 1, 1, 2))

}