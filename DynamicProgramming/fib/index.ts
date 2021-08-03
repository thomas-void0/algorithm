/**
 * 斐波那契数
 * @see https://leetcode-cn.com/problems/fibonacci-number/
 */


//1. 确定dp数组下标的含义
//2. 确定递推公示 dp[n] = dp[n - 1] + dp[n - 2]
//3. dp数组如何初始化： dp[0] = 0 dp[1] = 1
//4. 从前往后遍历，因为当前项目 = 前面两项的和
//5. 推导递推公式 [0,1,1,2,3,5,8,13,21...]
function fib(n: number): number {
    if (n <= 1) return n

    //创建dp数组
    const dp: number[] = [0, 1]

    for (let i = 2; i <= n; i++) {
        dp.push(dp[i - 1] + dp[i - 2])
    }

    return dp[n]
};

fib(10)