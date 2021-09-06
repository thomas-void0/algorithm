/**
 * 不同路径
 * @see https://leetcode-cn.com/problems/unique-paths/
 */
function uniquePaths(m: number, n: number): number {
    // 1. 确定dp数组下标含义：从(0,0)出发到(i,j)所有的路径数dp[i][j]
    // 2. 递推公式:dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    // 3. 初始化：dp[i][0] = 1 dp[0][j] = 1
    // 4. 遍历顺序: 从左到右
    // 5. 推导dp数组
    const dp:number[][] = Array.from({length:m},()=> new Array(n))
    // 初始化 
    for(let i = 0;i < m; i++) dp[i][0] = 1
    for(let j = 0;j < n; j++) dp[0][j] = 1

    for(let i = 1;i < m;i++){
        for(let j = 1;j < n;j++){
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }

    return dp[m - 1][n - 1]
};