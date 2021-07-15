/**
 * 复原 IP 地址
 * @see https://leetcode-cn.com/problems/restore-ip-addresses/
 */
//1, 如何有效的切割字符串
//2, 如何判断是否为有效的ip地址： <= 255, 不能以0为先导，不能低于4个整数
function restoreIpAddresses(s: string): string[] {

    if (s.length > 12) return []

    const result: string[] = []
    let pointNum = 0 //记录分割的次数

    //查看截取的这一段是否为有效地址的一段
    function isValid(s: string, start: number, end: number) {

        const str = s.substring(start, end + 1)

        if (str.length === 0) return false

        //必须小于255
        if (+str > 255) return false;
        //先导不能为0
        if (str.length > 1 && str[0] === "0") return false

        return true
    }

    function backtracking(s: string, startIndex: number) {
        //终止条件
        if (pointNum === 3) {
            isValid(s, startIndex, s.length) && result.push(s)
            return
        }

        //遍历
        for (let i = startIndex; i < s.length; i++) {
            //判断当前分割的字符是否是有效的
            if (isValid(s, startIndex, i)) {
                //拼接一个点
                s = spliceStr(s, i)
                //点数量++
                pointNum++

                //递归下一轮,因为加了一个点，所以位置往后移动2位
                backtracking(s, i + 2)

                //回溯，替换最后一个点
                s = backStr(s)
                //点的数量--
                pointNum--
            }
        }
    }

    //删除最后一个
    function backStr(s: string) {
        const idx = s.lastIndexOf(".");
        let str = ""
        const len = s.length
        for (let i = 0; i < len; i++) {
            if (i === idx) continue
            str += s[i]
        }
        return str
    }

    //拼接字符串
    function spliceStr(s: string, index: number) {
        let str = ''
        const len = s.length
        for (let i = 0; i < len; i++) {
            str += s[i]
            if (i === index) str += '.'
        }
        return str
    }

    backtracking(s, 0)

    return result
};
console.log("test==>", restoreIpAddresses("1111"))