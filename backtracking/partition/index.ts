/**
 * 分割回文串
 * @see https://leetcode-cn.com/problems/palindrome-partitioning/
 */
//回文串：正反方向读起来都是同样的
function partition(s: string): string[][] {
    const result: string[][] = []
    const strPath: string[] = []

    //判断一段字符串是不是一个回文
    function isValid(s: string, start: number, end: number) {
        for (let i = start, j = end; i < j; i++, j--) {
            if (s[i] !== s[j]) return false
        }
        return true
    }

    function backtracking(s: string, startIndex: number) {
        //终止条件
        if (startIndex >= s.length) {
            result.push([...strPath])
            return
        }

        for (let i = startIndex; i < s.length; i++) {
            //如果这一段字符是回文，那么加入到结果中
            if (isValid(s, startIndex, i)) {
                const str = s.substring(startIndex, i + 1)
                strPath.push(str)
            } else {
                continue
            }

            //继续下一个字符
            backtracking(s, i + 1)
            strPath.pop()
        }
    }

    backtracking(s, 0)

    return result

};

console.log(partition("aab"))