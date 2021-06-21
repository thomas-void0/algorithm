/**
 * 给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法。
 */
 function multiply(array:number[]) {
     const result = Array(array.length)
     for (let i = 0; i < result.length; i++){
        const value = array.reduce((prev, num,idx) => {
            if (i !== idx) prev *= num
            return prev
        }, 1)
        result[i] = value
     }
  
    return result;
 }
  
console.log("2222",multiply([1,2,3,4]))