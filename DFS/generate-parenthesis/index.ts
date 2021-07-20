/**
 * 括号生成
 * @see https://leetcode-cn.com/problems/generate-parentheses/
 * @see https://leetcode-cn.com/problems/generate-parentheses/solution/gua-hao-sheng-cheng-dfs-by-zaimoe-f5qf/
 */
//判断扩号的有效性，假设左括号为-1,右括号为1。一个有效的括号，值就应该为0
function generateParenthesis(n: number): string[] {
    const result: string[] = [];

    function dfs(sum: number, limit: number, bracket: string) {
        //对传入的值进行越界检查,
        //1，左括号数量不能超过limit，sum总和不能>=1，3，添加的括号个数不能超过限制
        //因为是先添加的左括号，所以sum显示为负数状态
        if (sum < -limit || sum >= 1 || bracket.length > limit) {
            return
        }

        //满足平衡条件的则直接添加
        if (bracket.length === limit && sum === 0) {
            result.push(bracket)
            return
        }

        //不满足平衡条件，继续添加括号
        dfs(sum + 1, limit, bracket + ")")
        dfs(sum - 1, limit, bracket + "(")

    }

    //首先添加一个左括号,必须要从左括号先开始
    dfs(-1, 2 * n, "(")

    return result;
};
