/* this is the fastest one of these, and the most interesting. 

from:

http://www.ollcorrect.com/index.php/2013-12-31-09-01-55/js-fun/javascript-merge-sort-implementation-with-inversion-calculations

It doesn't pass actual arrays to the merge function, just number of where to split off from the main array. It seems that this causes a nice performance gain, and it uses sort of a couple recursion to get these numbers, in order to run through the merge, then the sort.

*/
var count = 0;
var perf = 0;
var mergeNumber = 0;
var splitNumber = 0;

function createRandomNumbersArray() {
   var i = 300000;
   tempArray = [];

   while (i--) {
    tempArray.push(Math.round(Math.random() * i))
   } 
console.log('our random array is now'+tempArray);
}

countInverse([2,5,3,9,6,1]);



 function countInverse(array) {
    console.log('beginning array is '+ array);

     split(0, array.length - 1);
     console.log("Result:" + array);
     console.log('Inversions: '+count);
     console.log('perf: ' + array.length * Math.log(array.length));

     function split(left, right) { 
        splitNumber++;

        console.log('################   SPLIT '+splitNumber + '  ##############');    
         var middle = Math.floor((right + left) / 2);
       
         console.log('Split Indices: left: ' + left + ', middle: ' + middle + ', :right ' + right);
        
         if (middle > left) {
            // if the middle is greater than the left, splut the 2 parts
            console.log('middle greater than left, splitting left: '+left+' and middle: '+middle);
             split(left, middle);
             console.log('middle greater than left, splitting 1 right of middle: '+(middle+1)+' and right: '+right);
             split(middle + 1, right);
         }
         merge(left, middle, right)
     }

     function merge(left, middle, right) {
        mergeNumber++;

         console.log('################   MERGE '+mergeNumber + '  ##############');        
         console.log('Merge Indices: ' + left + ', middle: ' + middle + ', :right ' + right);
         var leftArr = array.slice(left, middle + 1);
         var rightArr = array.slice(middle + 1, right + 1);
        console.log(leftArr)
        console.log('leftArray slice from left to middle PLUS one');
        console.log(rightArr)
        console.log('rightArray slice from left to right PLUS one');

         while (leftArr.length > 0 && rightArr.length > 0) {
             perf++;
             if (leftArr[0] < rightArr[0]) {
                 array[left++] = leftArr.shift();
                 console.log('main array is now');
                 console.log(array);
             } else {
                 count = (count+leftArr.length);
                 array[left++] = rightArr.shift();
                 console.log('main array is now');
                 console.log(array);
             }
         }

         leftArr.concat(rightArr);
         console.log('joining left and right arrays')
        console.log(leftArr)
        console.log(rightArr);

         while (leftArr.length > 0) {
             array[left++] = leftArr.shift();
             console.log('main array is now');
             console.log(array);
         }
     }
     return count;
 }

 /* Here is what the console gives you for this, it's really interesting!!
so we have 12 elements, or using an index of 0 we'd have 11
This split just looks for a new place for the right index each tim

beginning array is 2,5,3,9,6,12,9,5,3,2,0,1 


Split- left: 0, middle: 5, :right 11 
Split- left: 0, middle: 2, :right 5 
Split- left: 0, middle: 1, :right 2 
Split- left: 0, middle: 0, :right 1 

Merge- left: 0, middle: 0, :right 1 
[2] 
[5] 

Split- left: 2, middle: 2, :right 2 
Merge- left: 2, middle: 2, :right 2 
[3] 
[] 

Merge- left: 0, middle: 1, :right 2 
[2, 5] 
[3] 

Split- left: 3, middle: 4, :right 5 
Split- left: 3, middle: 3, :right 4 
Merge- left: 3, middle: 3, :right 4 
[9] 
[6] 
Split- left: 5, middle: 5, :right 5 
Merge- left: 5, middle: 5, :right 5 
[12] 
[] 
Merge- left: 3, middle: 4, :right 5 
[6, 9] 
[12] 
Merge- left: 0, middle: 2, :right 5 
[2, 3, 5] 
[6, 9, 12] 
Split- left: 6, middle: 8, :right 11 
Split- left: 6, middle: 7, :right 8 
Split- left: 6, middle: 6, :right 7 
Merge- left: 6, middle: 6, :right 7 
[9] 
[5] 
Split- left: 8, middle: 8, :right 8 
Merge- left: 8, middle: 8, :right 8 
[3] 
[] 
Merge- left: 6, middle: 7, :right 8 
[5, 9] 
[3] 
Split- left: 9, middle: 10, :right 11 
Split- left: 9, middle: 9, :right 10 
Merge- left: 9, middle: 9, :right 10 
[2] 
[0] 
Split- left: 11, middle: 11, :right 11 
Merge- left: 11, middle: 11, :right 11 
[1] 
[] 
Merge- left: 9, middle: 10, :right 11 
[0, 2] 
[1] 
Merge- left: 6, middle: 8, :right 11 
[3, 5, 9] 
[0, 1, 2] 
Merge- left: 0, middle: 5, :right 11 
[2, 3, 5, 6, 9, 12] 
[0, 1, 2, 3, 5, 9] 
Result:0,1,2,2,3,3,5,5,6,9,9,12 
Inversions: 45 
perf: 29.818879797456006 

*/