/**
 * 找寻旋转数组的最小值
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个非减排序的数组的一个旋转，输出旋转数组的最小元素。
 * 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。
 * NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
 * 
 * 
 
    旋转数组其实是由两个有序数组拼接而成的，因此我们可以使用二分法，只需要找到拼接点即可。

    (1)array[mid] > array[high]:

    出现这种情况的array类似[3,4,5,6,0,1,2]，此时最小数字一定在mid的右边。 low = mid + 1

    (2)array[mid] == array[high]:

    出现这种情况的array类似 [1,0,1,1,1]或者[1,1,1,0,1]，此时最小数字不好判断在mid左边 还是右边,这时只好一个一个试 。 high = high - 1

    (3)array[mid] < array[high]:

    出现这种情况的array类似[2,2,3,4,5,6,6],此时最小数字一定就是array[mid]或者在mid的左 边。因为右边必然都是递增的。 high = mid

 */
 function minNumberInRotateArray(arr:number[])
 {
     let len = arr.length;
     if(len == 0)  return 0;
     let low = 0, high = len - 1;
     while(low < high) {
         let mid = low + Math.floor((high-low)/2);
         if(arr[mid] > arr[high]) {
             low = mid + 1;
         } else if(arr[mid] == arr[high]) {
             high = high - 1;
         } else {
             high = mid;
         }
     }
  
     return arr[low];
 }

console.log(minNumberInRotateArray([1,0,1,1,1]))