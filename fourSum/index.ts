/**
 * 给定一个包含 n 个整数的数组nums，判断 nums 中是否存在四个元素a，b，c，d ，
 * 使得 a + b + c + d = 0 ？找出所有满足条件且不重复的四元组。
 * 注意：答案中不可以包含重复的四元组。

给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

满足要求的四元组集合为：
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
 */
namespace fourSum{
    function fourSum(nums: number[]) {
        const result = []
        nums.sort(compare)
        const len = nums.length
        for (let i = 0; i < len; i++){
            if(i && nums[i] === nums[i - 1]) continue
            let one = i + 1
            let two = i + 2
            let right = len - 1
            while (two < right) {
                const sum = nums[i] + nums[one] + nums[two] + nums[right]
                if (sum > 0) {
                    right--
                } else if (sum < 0) {
                    one = two
                    two++
                } else {
                    result.push([nums[i], nums[one], nums[two], nums[right]])
                    //缩小范围，再次查找
                    one = two
                    two++
                    //去除相同的数字
                    while (nums[one] === nums[one - 1]) {
                        one++
                        two++
                    }
                    while (nums[right] === nums[right + 1]) {
                        right--
                    }

                }
            }
        }
        return result
    }
    function compare(a:number,b:number) {
        const value = a - b
        if (value > 0) return 1
        if (value === 0) return 0
        return -1
    }

    console.log("test:",fourSum([1, 0, -1, 0, -2, 2]))
}