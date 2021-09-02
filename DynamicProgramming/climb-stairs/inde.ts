/**
 * 爬楼梯
 * @see https://leetcode-cn.com/problems/climbing-stairs/
 */
function climbStairs(n: number): number {
    if (n === 0) return 0
    // 1，确定数组下标的定义，dp[i]就是记录的每一层楼梯的步数
    // 2. 确定递推公式：dp[i] = dp[i - 1] + dp[i - 2]
    // 3. 初始化dp数组，从0开始，0就是0dp[0] = 0
    // 4. 确定遍历方向，从前往后
    // 5. 推导dp数组[0,1,2,3,5,8]
    //dp[0]是没有意义，因为i代表的是楼层，0没有楼层
   const dp:number[] = []
   for(let i = 0;i <= n + 1;i++){
    dp[i] = i > 1 ? dp[i - 1] + dp[i - 2] : i
}
   return dp.pop() as number
};