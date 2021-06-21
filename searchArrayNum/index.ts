/**
 * 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置, 如果没有则返回-1（需要区分大小写）
 */

namespace searchArrayNum{
    /**
 * 用一个map存储每个字符出现的字数
第一次循环存储次数，第二次循环找到第一个出现一次的字符。
时间复杂度O(n)、空间复杂度O(n)
 */
    function searchArrayNum1(arr: any[]) {
        const map: any = {}
        //记录次数
        for (let i = 0; i < arr.length; i++){
           const current = arr[i]
            const count = map[current]
            map[current] = count ? count + 1 : 1
        }

        //寻找多次出现的数
        for (let j = 0; j < arr.length; j++){
            if (map[arr[j]] === 1) {
                return j
            }
        }

        return - 1
    }
    /**
     * 
     * 使用js的array提供的indexOf和lastIndexOf方法
     * 遍历字符串，比较每个字符第一次和最后一次出现的位置是否相同。
     * indexOf的时间复杂度为O(n)，所以整体的时间复杂度为O(n2)，空间复杂度为0。
     */
    function searchArrayNum2(arr: any[]) {
        for (let i = 0; i < arr.length; i++){
            const current = arr[i]
            if (arr.indexOf(current) === arr.lastIndexOf(current)) {
                return i
            }
        }
        return -1
    }

    console.log("test1:",searchArrayNum1([1, 2, 3, 2, 3, 4]))
    console.log("test2:",searchArrayNum2([1, 2, 3, 2, 3, 4]))
}