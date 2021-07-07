namespace movingCount {
    function movingCount(m: number, n: number, k: number): number {
        let num = 0
        //首先，创建盒子
        const grid = Array.from({ length: m }, () => new Array(n).fill(0))

        //处理双数
        function dealWithDual(number: number) {
            let sum = 0
            if (number >= 10) {
                const list = `${number}`.split("")
                const len = list.length
                for (let i = 0; i < len; i++) sum += (+list[i]);
            } else {
                sum += number
            }
            return sum
        }

        //此坐标是否满足要求
        function isTrue(x: number, y: number) {
            let sum = 0
            sum += dealWithDual(x)
            sum += dealWithDual(y)

            return sum <= k
        }

        //创建队列
        const queue = [[0, 0]]
        while (queue.length) {
            const [x, y] = queue.shift()!
            if (grid[x][y] === 1) continue
            grid[x][y] = 1 //此坐标已经访问，

            //获取下右的坐标
            if (x + 1 < m && grid[x + 1][y] !== 1 && isTrue(x + 1, y)) queue.push([x + 1, y]);
            if (y + 1 < n && grid[x][y + 1] !== 1 && isTrue(x, y + 1)) queue.push([x, y + 1]);
        }

        for (let x = 0; x < m; x++) {
            for (let y = 0; y < n; y++) {
                grid[x][y] === 1 && num++
            }
        }

        return num
    };

    console.log("movingCount==>", movingCount(16, 8, 4))
    console.log("movingCount2==>", movingCount(11, 8, 16))
    console.log("movingCount3==>", movingCount(36, 11, 15))

}