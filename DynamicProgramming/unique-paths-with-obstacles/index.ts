/**
 * @see https://leetcode-cn.com/problems/unique-paths-ii/
 */
 function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    // 1. dp数组的下标及其含义,dp[i][j]就是(0,0)到达(i,j)坐标的路径和
    // 2. dp[i][j] = dp[i - 1][j] + dp[i][j = 1]
    // 3. dp[i][0] 在没有障碍的情况下就是1 dp[0][j]同理
    // 4. 从前往后逐层遍历
    // [1,1,1,0,0,0,0]
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length
    const dp = Array.from({length:m},()=> new Array(n).fill(0))

    for(let i = 0;i < m; i++) {
        if(obstacleGrid[i][0] === 1) break
        dp[i][0] = -1
    }

    for(let j = 0;j < n; j++){
        if(obstacleGrid[0][j] === 1) break
        dp[0][j] = -1
    }

    for(let i = 1;i < m; i++){
        for(let j = 1;j < n; j++){
            if(obstacleGrid[i][j] === 1) {
                continue
            }
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }

    return Math.abs(dp[m - 1][n - 1])
};