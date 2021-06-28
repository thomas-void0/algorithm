/**
 * 求1+2+3+...+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）
 */
namespace getSum2{
    function getSum(n:number):number {
        return n && (n + getSum(n - 1))
    }
    console.log("getSum:",getSum(10))
}