class Heap{
    type: "min" | "max"
    value:number[]
    constructor(type: "min" | "max" = "min") {
        this.type = type
        this.value = []
    }

    create() {
        const length = this.value.length
        for (let i = Math.floor((length / 2) - 1); i >= 0; i--){
            this.ajust(i,length)
        }
    }

    ajust(index:number,length:number) {
        const array = this.value
        for (let i = 2 * index + 1; i < length; i = 2 * i + 1){
            if (i + 1 < length) {
                if ((this.type === "max" && array[i + 1] > array[i]) || (this.type === "min" && array[i + 1] < array[i])) {
                    i++
                }
            }
            if ((this.type === "max" && array[index] < array[i]) || (this.type === "min" && array[index] > array[i])) {
                [array[index],array[i]] = [array[i],array[index]]
                index = i
            } else {
                break
            }
        }
    }

    add(num:number) {
        const array = this.value
        array.push(num)
        if (array.length > 1) {
            let index = array.length - 1
            let target = Math.floor((index - 1) / 2)
            while (target >= 0) {
                if ((this.type === "min" && array[index] < array[target]) || (this.type === "max" && array[index] > array[target])) {
                    [array[index],array[target]] = [array[target],array[index]]
                    index = target
                    target = Math.floor((index - 1) / 2)
                } else {
                    break
                }
            }
        }
    }

    pop() {
        const array = this.value
        let result = null
        if (array.length > 1) {
            result = array[0]
            array[0] = (array.pop() as number)
            this.ajust(0,array.length)
        } else if (array.length === 1) {
            return array.pop()
        }
        return result
    }
}


var heap = new Heap('min');
[5, 6, 3, 11, 1, 0, 9].forEach(num => {
    heap.add(num)
})

console.log(heap.value);
console.log(heap.pop()); 
console.log(heap.value);