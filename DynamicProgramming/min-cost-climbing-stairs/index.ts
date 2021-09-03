/**
 * 使用最小花费爬楼梯
 * @see https://leetcode-cn.com/problems/min-cost-climbing-stairs/
 */
function minCostClimbingStairs(cost: number[]): number {
    // 1. 确认dp数组下标的含义
    // 2. 确定递推公式
    // 3. dp数组初始化
    // 4. 遍历方向
    // 5. 推导递推公式

    // dp存储到某一层的最小体力值花费
    // 到达第i层花费的最小体力 前面花费的最小体力 + 当前楼梯的体力 dp[i] = Math.min(dp[i - 1],dp[i - 2]) + cost[i];
    // 初始化dp：dp[0] = cost[0] dp[1] = cost[1]
    // 遍历顺序，从前往后
    // 推导

    const dp = [cost[0],cost[1]]
    const len = cost.length;
    for(let i = 2;i < len;i++){
        const power =  Math.min(dp[i - 1],dp[i - 2]) + cost[i] 
        dp.push(power)
    }
    const dpLen = dp.length
    return Math.min(dp[dpLen - 1],dp[dpLen - 2])

};