//太平洋，大西洋水流问题
namespace pacificAtlantic{
    function pacificAtlantic(heights: number[][]): number[][] {
        //找到坐标右上角坐标，以及左下角坐标
        const m = heights.length
        const n = heights[0].length
        let _y = m - 1 //一维数组坐标
        let _x = n - 1 //一维数组值的坐标
        const result: number[][] = [[0, _x], [_y, 0]]

        for (let i = 0; i < m; i++){
            for (let j = 0; j < n; j++){
                //左下角和右上角的坐标无须处理
                if ((i === 0 && j === _x) || (i === _y && j === 0)) continue 
                //进行上下左右对比
                const isTrue = lrIsTrue(j,i,heights[i][j]) || tbIsTrue(j,i,heights[i][j])
                isTrue && result.push([i,j])
            }
        }

        //判断左右两边
        function lrIsTrue(x: number, y: number, initValue: number) {

            //对比左边
            let prev = initValue
            for (let i = x - 1; i >= 0; i--){
                if (heights[y][i] <= prev) {
                    prev = heights[y][i]
                } else {
                    return false
                }
            }

            //对比右边
            prev = initValue
            for (let i = x + 1; i < n; i++){
                if (heights[y][i] <= prev) {
                    prev = heights[y][i]
                } else {
                    return false
                }
            }

            return true
        }

        //判断上下两边
        function tbIsTrue(x: number, y: number, initValue: number) {

            //对比上边
            let prev = initValue
            for (let i = y - 1; i >= 0; i--){
                if (heights[i][x] <= prev) {
                    prev = heights[i][x]
                } else {
                    return false
                }
            }

            //对比下边
            prev = initValue
            for (let i = y + 1; i < n; i++){
                if (heights[i][x] <= prev) {
                    prev = heights[i][x]
                } else {
                    return false
                }
            }

            return true
        }
       
        return result
    };
}
