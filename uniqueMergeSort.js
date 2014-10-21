/* this is the fastest one of these, and the most interesting. 
It doesn't pass actual arrays to the merge function, just number of where to split off from the main array. It seems that this causes a nice performance gain, and it uses sort of a couple recursion to get these numbers, in order to run through the merge, then the sort.

*/
var count = 0;
var perf = 0;

 function countInverse(array) {

     split(0, array.length - 1);
    console.log("Result:" + array);
     console.log(count);
     console.log(perf + ' ' + array.length * Math.log(array.length));

     function split(left, right) {
        console.log('Split ' + left + " " + right)
         var middle = Math.floor((right + left) / 2);

         if (middle > left) {
             split(left, middle);
             split(middle + 1, right);
         }
         merge(left, middle, right)
     }

     function merge(left, middle, right) {
         console.log("Merge" + left + ',' + middle + ',' + right);
         var leftArr = array.slice(left, middle + 1);
         var rightArr = array.slice(middle + 1, right + 1);
        console.log(leftArr);
        console.log(rightArr);
         while (leftArr.length > 0 && rightArr.length > 0) {
             perf++;
             if (leftArr[0] < rightArr[0]) {
                 array[left++] = leftArr.shift();
             } else {
                 count = (count+leftArr.length);
                 array[left++] = rightArr.shift();
             }
         }
         leftArr.concat(rightArr);
         while (leftArr.length > 0) {
             array[left++] = leftArr.shift();
         }
     }
     return count;
 }