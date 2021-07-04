//太平洋，大西洋水流问题
/**
 * [
 * [1,2,2,3,5],
 * [3,2,3,4,4],
 * [2,4,5,3,1],
 * [6,7,1,4,5],
 * [5,1,1,2,4]
 * ]
 */
namespace pacificAtlantic {
    // function pacificAtlantic(heights: number[][]): number[][] {
    //     //找到坐标右上角坐标，以及左下角坐标
    //     const m = heights.length
    //     const n = heights[0].length
    //     let _y = m - 1 //一维数组坐标
    //     let _x = n - 1 //一维数组值的坐标
    //     const result: number[][] = [[0, _x], [_y, 0]]

    //     for (let i = 0; i < m; i++){
    //         for (let j = 0; j < n; j++){
    //             //左下角和右上角的坐标无须处理
    //             if ((i === 0 && j === _x) || (i === _y && j === 0)) continue
    //             if (i === 1 && j === 3) {
    //                 console.log("节点")
    //             }
    //             //进行上下左右对比
    //             const currnetValue = heights[i][j]
    //             const isLTrue = leftIsTrue(j, i, currnetValue)
    //             const isRTrue = rightIsTrue(j, i, currnetValue)
    //             const isTTrue = topIsTrue(j, i, currnetValue) 
    //             const isBTrue = bottomIsTrue(j, i, currnetValue)
    //             //通路的情况:左右 、 上下 、 左下、 右上
    //             const isTrue = (isLTrue && isRTrue) || (isTTrue && isBTrue) || (isLTrue && isBTrue) || (isRTrue && isTTrue)
    //             if (i === 1 && j === 3) {
    //                 console.log("节点is:", isTrue, currnetValue)
    //                 console.log(isLTrue)
    //                 console.log(isRTrue)
    //                 console.log(isTTrue)
    //                 console.log(isBTrue)
    //             }
    //             isTrue && result.push([i, j])
    //             //处理右上的特殊情况

    //         }
    //     }

    //     function bfs(x:number,y:number[]) {

    //     }

    //     //判断左边
    //     function leftIsTrue(x: number, y: number, initValue: number) {

    //         let prev = initValue
    //         for (let i = x - 1; i >= 0; i--){
    //             if (heights[y][i] <= prev) {
    //                 prev = heights[y][i]
    //             } else {
    //                 return false
    //             }
    //         }

    //         return true
    //     }

    //     //判断右边
    //     function rightIsTrue(x: number, y: number, initValue: number) {

    //         let prev = initValue
    //         for (let i = x + 1; i < n; i++){
    //             if (heights[y][i] <= prev) {
    //                 prev = heights[y][i]
    //             } else {
    //                 return false
    //             }
    //         }
    //         return true
    //     }

    //     //判断下边
    //     function bottomIsTrue(x: number, y: number, initValue: number) {
    //         let prev = initValue
    //         for (let i = y + 1; i < n; i++){
    //             if (heights[i][x] <= prev) {
    //                 prev = heights[i][x]
    //             } else {
    //                 return false
    //             }
    //         }

    //         return true
    //     }

    //     //判断上边
    //     function topIsTrue(x: number, y: number, initValue: number) {

    //         let prev = initValue
    //         for (let i = y - 1; i >= 0; i--){
    //             if (heights[i][x] <= prev) {
    //                 prev = heights[i][x]
    //             } else {
    //                 return false
    //             }
    //         }

    //         return true

    //     }

    //     return result
    // };

    // const list = [[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]]
    // console.log("result:",pacificAtlantic(list))

    function pacificAtlantic(heights: number[][]): number[][] {
        if (!heights || !heights[0]) return []

        const m = heights.length //一维数组的个数
        const n = heights[0].length //一维数组值的个数

        //创建2个长度和宽度都增加10的二维数组
        const flag = Array.from({ length: m + 10 }, () => new Array(n + 10).fill(0))
        const flag2 = Array.from({ length: m + 10 }, () => new Array(n + 10).fill(0))

        console.log(flag)
        console.log(flag2)

        const bfs = (x: number, y: number) => {
            const queue = [[x, y]]
            flag[x][y] = 1
            while (queue.length) {
                const [cx, cy] = queue.shift()!
                flag[cx][cy] = 1 //此坐标标记为访问

                const num = heights[cx][cy] //在二维数组中对应坐标的值

                var top = cx - 1 >= 0 ? heights[cx - 1][cy] : -1
                var bottom = cx + 1 < m ? heights[cx + 1][cy] : -1
                var left = cy - 1 >= 0 ? heights[cx][cy - 1] : -1
                var right = cy + 1 < n ? heights[cx][cy + 1] : -1

                //该坐标上边的值比它大同时在创建的二维数组中，此坐标没有被标记过
                if (top >= num && flag[cx - 1][cy] == 0) {
                    flag[cx - 1][cy] = 1 //此坐标标记为1
                    queue.push([cx - 1, cy])
                }
                if (bottom >= num && flag[cx + 1][cy] == 0) {
                    flag[cx + 1][cy] = 1
                    queue.push([cx + 1, cy])
                }
                if (left >= num && flag[cx][cy - 1] == 0) {
                    flag[cx][cy - 1] = 1
                    queue.push([cx, cy - 1])
                }
                if (right >= num && flag[cx][cy + 1] == 0) {
                    flag[cx][cy + 1] = 1
                    queue.push([cx, cy + 1])
                }
            }


        }

        const bfs2 = (x: number, y: number) => {
            const queue = [[x, y]]
            flag2[x][y] = 1
            while (queue.length) {
                const c = queue.shift()!
                var cx = c[0]
                var cy = c[1]
                flag2[cx][cy] = 1

                const num = heights[cx][cy]
                var top = cx - 1 >= 0 ? heights[cx - 1][cy] : -1
                var bottom = cx + 1 < m ? heights[cx + 1][cy] : -1
                var left = cy - 1 >= 0 ? heights[cx][cy - 1] : -1
                var right = cy + 1 < n ? heights[cx][cy + 1] : -1
                if (top >= num && flag2[cx - 1][cy] == 0) {
                    flag2[cx - 1][cy] = 1
                    queue.push([cx - 1, cy])
                }
                if (bottom >= num && flag2[cx + 1][cy] == 0) {
                    flag2[cx + 1][cy] = 1
                    queue.push([cx + 1, cy])

                }
                if (left >= num && flag2[cx][cy - 1] == 0) {
                    flag2[cx][cy - 1] = 1
                    queue.push([cx, cy - 1])

                }
                if (right >= num && flag2[cx][cy + 1] == 0) {
                    flag2[cx][cy + 1] = 1
                    queue.push([cx, cy + 1])

                }
            }


        }

        //从左到右
        for (let i = 0; i < n; i++) {
            bfs(0, i)
        }
        //从上到下
        for (let i = 0; i < m; i++) {
            bfs(i, 0)
        }

        //从左到右
        for (let i = 0; i < m; i++) {
            bfs2(i, n - 1)
        }
        //从上到下
        for (let i = 0; i < n; i++) {
            bfs2(m - 1, i)
        }

        const result = []
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (flag[i][j] + flag2[i][j] === 2) {
                    result.push([i, j])
                }
            }
        }

        return result
    };

    const list = [[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]]
    console.log("result:", pacificAtlantic(list))
}


