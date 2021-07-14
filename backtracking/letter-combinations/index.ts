/**
 * 电话号码的字母组合
 * @see https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 */

function letterCombinations(digits: string): string[] {
    //创建一个字符表
    const configList = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]

    const k = digits.length

    if (k === 0) return []
    if (k === 1) return configList[+digits].split("")

    //有多个字符,处理得到需要拼接的元素数组
    const strList: string[] = []
    for (let i = 0; i < k; i++) {
        const idx = +digits[i]
        strList.push(configList[idx])
    }

    const result: string[] = []
    const path: string[] = []
    /**
     * 
     * @param k 代表需要查找的数字数量，也就是代表了需要递归的层数
     * @param list  需要组合的元素字符串数组
     * @param startIndex 需要开始的索引值
     */
    //要对每次进来的list进行处理
    function backtracking(k: number, list: string[], startIndex: number) {

        //终止条件
        if (path.length === k) return result.push(path.join(""))

        const strLen = list[startIndex].length

        //遍历
        for (let i = 0; i < strLen; i++) {
            //进行组合,加入字符串的对应位置的字符
            path.push(list[startIndex][i])
            //递归下一轮
            backtracking(k, list, startIndex + 1)
            //回溯
            path.pop()
        }
    }

    backtracking(k, strList, 0)

    return result
};

console.log(letterCombinations("23"))