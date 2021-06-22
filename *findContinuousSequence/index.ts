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
        while (big < sum) {
            while (currentSum < sum && big < sum) {
                child.push(++big);
                currentSum += big;
            }
            while (currentSum > sum && small < big) {
                child.shift();
                currentSum -= small++;
            }
            if (currentSum === sum && child.length > 1) {
                result.push(child.slice());
                child.push(++big);
                currentSum += big;
            }
        }
        return result;
    }
    console.log("test:",FindContinuousSequence(15))
}