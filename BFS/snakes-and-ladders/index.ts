/**
 * @see https://leetcode-cn.com/problems/snakes-and-ladders/solution/bfs-by-sc8816-joyt/
 */
namespace snakesAndLadders {
    function snakesAndLadders(board: number[][]): number {
        const len = board.length //矩阵大小
        const size = len * len
        const list: any[] = [null] //降维

        //将数组颠倒过来变成一个一维数组
        board.reverse().map((item, index) => {
            if (index % 2 === 0) list.push(...item) //偶数行正序
            else list.push(...item.reverse()) //奇数行倒序
        })

        //创建一个集合，处理已经走过的点。因为1这个点是已经走过的，所以直接记录下来
        const visit = new Set().add(1)
        //创建一个队列，记录当前停留的位置
        let queue = [1]

        let step = 0
        while (queue.length) {
            step++ //一轮查找步骤增加一次
            const nextQueue = []
            const pos = queue.shift()!
            for (let i = 1; i <= 6 && pos + i <= size; i++) {
                //查看6个坐标的状态
                let newPos = pos + i
                //是否存在此位置的坐标
                if (visit.has(newPos)) continue
                //说明存在传送门，传送到的位置
                if (list[newPos] !== -1) newPos = list[newPos];
                //看一下传送门的位置是否满足了条件
                if (newPos === size) return step
                //如果不满足直接记录下此位置的坐标,
                nextQueue.push(newPos)
                visit.add(newPos)
            }
            queue = nextQueue
        }

        return -1
    };

    console.log("test==>", snakesAndLadders([
        [-1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1],
        [-1, 35, -1, -1, 13, -1],
        [-1, -1, -1, -1, -1, -1],
        [-1, 15, -1, -1, -1, -1]
    ]))

    function snakesAndLadders2(board: number[][]): number {
        const len = board.length //矩阵大小
        const list: any[] = [null] //降维
        board.reverse().map((item, index) => {
            if (index % 2 === 0) list.push(...item)
            else list.push(...item.reverse())
        })
        let step = 0
        let quenue: number[] = [1]
        let visit = new Set().add(1) //记录已经到达过的位置直接排除不符合最少移动

        while (quenue.length) {
            step++
            let nextList = []
            for (let i of quenue) {
                for (let j = 1; j <= 6 && i + j <= len * len; j++) {
                    let idx = i + j //当前能到达的索引
                    if (list[idx] !== -1) idx = list[idx]
                    if (idx === len * len) return step
                    if (idx > list.length) continue
                    if (visit.has(idx)) continue
                    nextList.push(idx)
                    visit.add(idx)
                }
            }
            quenue = nextList
        }
        return -1
    };

}