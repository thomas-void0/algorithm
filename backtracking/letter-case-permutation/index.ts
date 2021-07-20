/**
 * 字母大小写全排列
 * @see https://leetcode-cn.com/problems/letter-case-permutation/
 */
function letterCasePermutation(s: string): string[] {
    const result: string[] = []

    function bfs(str: string, startIndex: number) {
        result.push(str)

        for (let i = startIndex; i < str.length; i++) {
            //如果该字符是字母,则进行转换
            if (str[i] >= "a" && str[i] <= "z") {
                const _s = str.substring(0, i) + str[i].toUpperCase() + str.substring(i + 1)
                bfs(_s, i + 1)
            } else if (str[i] >= "A" && str[i] <= "Z") {
                const _s = str.substring(0, i) + str[i].toLowerCase() + str.substring(i + 1)
                bfs(_s, i + 1)
            }
        }

    }

    bfs(s, 0)

    return result
};
