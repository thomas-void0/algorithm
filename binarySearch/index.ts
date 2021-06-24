/**
 * 统计一个数字在排序数组中出现的次数。
 */
namespace binarySearch{
    function binarySearch(
        nums: number[],
        target: number,
        start: number,
        end: number
    ): number {
        if(start > end) return -1
        const mid = Math.floor((start + end) / 2)
        //取左边
        if (nums[mid] > target) {
            return binarySearch(nums,target,start,mid - 1)
        }
        //取右边
        if (nums[mid] < target) {
            return binarySearch(nums,target,mid + 1,end)
        }
       
        return mid
    }

    function getSum(nums:number[],target:number) {
        const idx = binarySearch(nums, target, 0, nums.length)
        if (idx === -1) return 0

        let sum = 1

        let left = idx - 1
        let right = idx + 1
        while (left >= 0 && nums[left] === target) {
            left--
            sum++
        }
        while (right < nums.length && nums[right] === target) {
            right++
            sum++
        }

        return sum
    }

    console.log("hhhhh",getSum([1,2,3,3,3,3,4,5,6],3))
}
