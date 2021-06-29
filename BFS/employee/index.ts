/**
 * 
给定一个保存员工信息的数据结构，它包含了员工 唯一的 id ，重要度 和 直系下属的 id 。

比如，员工 1 是员工 2 的领导，员工 2 是员工 3 的领导。他们相应的重要度为 15 , 10 , 5 。那么员工 1 的数据结构是 [1, 15, [2]] ，员工 2的 数据结构是 [2, 10, [3]] ，员工 3 的数据结构是 [3, 5, []] 。注意虽然员工 3 也是员工 1 的一个下属，但是由于 并不是直系 下属，因此没有体现在员工 1 的数据结构中。

现在输入一个公司的所有员工信息，以及单个员工 id ，返回这个员工和他所有下属的重要度之和。

 

示例：

输入：[[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1
输出：11
解释：
员工 1 自身的重要度是 5 ，他有两个直系下属 2 和 3 ，而且 2 和 3 的重要度均为 3 。因此员工 1 的总重要度是 5 + 3 + 3 = 11 。
 

提示：

一个员工最多有一个 直系 领导，但是可以有多个 直系 下属
员工数量不超过 2000 。

 */

class Employee {
    id: number
    importance: number
    subordinates: number[]
    constructor(id: number, importance: number, subordinates: number[]) {
    this.id = (id === undefined) ? 0 : id;
        this.importance = (importance === undefined) ? 0 : importance;
        this.subordinates = (subordinates === undefined) ? [] : subordinates;
    }
}


//广度优先遍历
function getImportance(employees: any[], id: number): number {
    let sum = 0
    //设置一个队列
    const queue:Employee[] = []
    //找到此雇员
    let employee: Employee | undefined = employees.find(item=> item.id === id)
    employee && queue.push(employee)

    //找到对应的雇员信息
    while (queue.length > 0) {
        const { subordinates, importance } = queue.shift()!
        sum += importance
        while (subordinates.length > 0) {
            const _id = subordinates.shift()
            employee = employees.find(item=> item.id === _id)
            employee && queue.push(employee)
        }
    }

    return sum
};

const list = [[1, 5, [2, 3]], [2, 3, []], [3, 3, []]]
const obj = list.map(item => ({
    id: item[0],
    importance: item[1],
    subordinates:item[2]
}))
console.log("==>",getImportance(obj,1))