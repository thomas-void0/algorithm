/**
 * 输入一个正数S，打印出所有和为S的连续正数序列。
 * 例如：输入15，有序1+2+3+4+5 = 4+5+6 = 7+8 = 15 所以打印出3个连续序列1-5，4-6和7-8。
 */
namespace FindContinuousSequence{
    function FindContinuousSequence(sum:number) {
        const result = [];
        const child = [1, 2];
        let big = 2;
        let small = 1;
        let currentSum = 3;

        //如果最大数小于总数则进行循环。
        while (big < sum) {
            //当前的总数<总数 && 最大数<总数
            while (currentSum < sum && big < sum) {
                child.push(++big); //最大值往右边移动
                currentSum += big;
            }
            //当前的总数>总数 && 最小数<最大数
            while (currentSum > sum && small < big) {
                child.shift();
                currentSum -= small++;//减去最小值，并且最小值往右边移动
            }
            //如果有满足条件的，则输出此数组
            if (currentSum === sum && child.length > 1) {
                result.push(child.slice());
                child.push(++big); //最大值往右边移动
                currentSum += big; //当前总数加上最大值
            }
        }
        return result;
    }
    console.log("test:",FindContinuousSequence(15))
}