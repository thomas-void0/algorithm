/**
 * 拆分字符串使唯一子字符串的数目最大
 * @see https://leetcode-cn.com/problems/split-a-string-into-the-max-number-of-unique-substrings/
 */
function maxUniqueSplit(s: string): number {

    const path: string[] = []
    let result = 1
    //检测是否已经被使用了
    function isValid(path: string[], element: string) {
        return path.includes(element)
    }
    //先切割一个，如果已经被使用了，那么就拼接下一个进行检测
    function dfs(startIndex: number) {
        console.log("startIndex:", startIndex)
        if (startIndex === s.length) {
            result = Math.max(path.length, result)
            return
        }

        for (let i = startIndex + 1; i <= s.length; i++) {
            const _s = s.substring(startIndex, i)
            console.log("_s==>", _s)
            if (!isValid(path, _s)) {
                console.log("添加:", _s)
                path.push(_s)
                dfs(i)
                console.log("回溯:", _s)
                path.pop()
            }
        }

    }

    dfs(0)

    return result
};
maxUniqueSplit("abaccc")