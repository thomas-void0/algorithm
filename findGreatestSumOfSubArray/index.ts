/**
 * 输入一个整型数组，数组里有正数也有负数。数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值，要求时间复杂度为O(n)
 * 例如:{6,-3,-2,7,-15,1,2,2},连续子向量的最大和为8(从第0个开始,到第3个为止)。
 
    记录一个当前连续子数组最大值 max 默认值为数组第一项
    记录一个当前连续子数组累加值 sum 默认值为数组第一项
    1.从数组第二个数开始，若 sum<0 则当前的sum不再对后面的累加有贡献，sum = 当前数
    2.若 sum>0 则sum = sum + 当前数
    3.比较 sum 和 max ，max = 两者最大值
 */
namespace findGreatestSumOfSubArray{
    function findGreatestSumOfSubArray(array:number[]) {
        let max = array[0]
        let sum = array[0]
        for (let i = 1; i < array.length - 1; i++){
            if (sum < 0) sum = array[i] //如果小于0就往后推一位
            if (sum > 0) sum += array[i]
            if(sum > max) max = sum
        }
        return max || 0
    }

    console.log("test:",findGreatestSumOfSubArray([6,-3,-2,7,-15,1,2,2]))
}