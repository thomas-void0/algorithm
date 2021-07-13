/**
 * 组合
 * @see https://leetcode-cn.com/problems/combinations/
 */
//使用回溯算法
//1,找到终止点，这里的终止点就是路径 = k
//2,递归下一层，缩小取值的区间
//3，回溯弹出已经组合好的值
function combine(n: number, k: number): number[][] {
    const result: number[][] = []
    const path: number[] = []
    function backtracking(startIndex: number) {
        if (path.length === k) {
            result.push([...path])
            return
        }
        //减枝操作
        const len = n - (k - path.length) + 1
        //遍历
        for (let i = startIndex; i <= len; i++) {
            path.push(i)
            //递归下一层
            backtracking(i + 1)
            //回溯,保持path中只存在一个值
            path.pop()
        }
    }
    backtracking(1)
    return result
};