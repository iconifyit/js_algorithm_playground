var qArray = [8,2,4,5,7,1];
var counts  = 0;
var count  = 0;
var mainArray = [];

   $.get('QuickSort.txt', function(data){
    tempArray =  data.toString().split(/\r\n|\r|\n/)
//     //console.log('data '+tempArray);
// //console.log('lets quickSortMedian this!')
// var ints = tempArray.slice(0,10000);
// ints.forEach(function(element, index, array) {
//     tempArray[index] = parseInt(element,10);

// });

for (var i = 0;i<tempArray.length;i++) {
    mainArray.push(parseInt(tempArray[i]));
}


console.log('tempArray length is '+tempArray.length);
//     //quickSortNow(tempArray)
    // first call
 //   console.log('qArray is '+qArray);
//console.log(quickSort(mainArray));
//quickSortMedian(tempArray)
//console.log(count);
quickSort(mainArray)
 console.log('count is '+count)

});

//quicksort([3,6,1,2,96,77,82,13,15,62,43,10,3,4,3,7,2,9,8,7,9,12,14,15]);

function swap(array, firstIndex, secondIndex){
     //   console.log('PRE SWAP: '+array);  
 //   console.log('swapping '+array[firstIndex]+' for '+array[secondIndex]);
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
//console.log('SWAPPED: '+array[firstIndex]+' for '+array[secondIndex]);
  //  console.log('DONE SWAPPED: '+array);  
}

function partition(array, left, right) {


// using FIRST element as pivot
   // var pivot = array[left]
// using LAST  element as pivot by swapping left for right
 //   swap(array,left,(right-1))
   // var pivot = array[left]    
// using MEDIAN element as pivot

    var median = getMedian([{element:array[left],index:left},{element:array[~~((left+right-1)/2)],index:~~((left+right-1)/2)},{element:array[right-1],index:right-1}])
 

    swap(array,left,median);

   var pivot = array[left]    

    var i = left + 1

    for (var j = left+1; j<right;j++) {

        if (array[j] <= pivot) {
            swap(array,j,i);
            i++;
        }
    }
    swap(array,left,(i-1));
    
    return i 
}

function quickSort(array, left, right) {

    var index;

    if (array.length > 1) {

        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? array.length: right;

        // if (right>left) {
        //     count = count+ right-left;
        // }
        index = partition(array, left, right);


      
        count+=parseInt(right-(left+1));
    
        if (left < index - 1) {
            quickSort(array, left, index - 1);
        }

        if (index < right) {
            quickSort(array, index, right);
        }

    }

    return array;
}


function getMedian(medianArray) {

//console.log('medianArray is '+medianArray);
/* here we run a 2 pass bubble sort to find the median number...*/
    var temp;  // 7,96,2
    if (medianArray[0].element > medianArray[1].element) {
      temp = medianArray[0]
      medianArray[0] = medianArray[1]
      medianArray[1] = temp
    }

 
        if (medianArray[1].element > medianArray[2].element) {
      temp = medianArray[1]
      medianArray[1] = medianArray[2]
      medianArray[2] = temp
    }
        if (medianArray[0].element > medianArray[1].element) {
      temp = medianArray[0]
      medianArray[0] = medianArray[1]
      medianArray[1] = temp
    }
    //     if (medianArray[2] > medianArray[0]) {
    //   temp = medianArray[2]
    //   medianArray[2] = medianArray[0]
    //   medianArray[0] = temp
    // }    

/* now we take the median number and grab the actual value of that 
number in our current array */
//console.log('medianArray is now '+medianArray);
    median = medianArray[1].index
   // console.log('median INDEX is ' +median);
    return median


}

// function quickSortMedian(array) {

//  //count = count + (array.length-1)

//   if (array.length <= 1) {
//     return array
//   }
//  // var randomNumber = Math.floor(Math.random()* array.length)
//   var medianArray = [
//     array[0],
//     array[Math.floor((array.length)/2)],
//     array[(array.length)-1]
//   ]

// /* here we run a 2 pass bubble sort to find the median number...*/
//     var temp;
//     if (medianArray[0] > medianArray[1]) {
//       temp = medianArray[1]
//       medianArray[1] = medianArray[0]
//       medianArray[0] = temp
//     }
//         if (medianArray[1] > medianArray[2]) {
//       temp = medianArray[2]
//       medianArray[2] = medianArray[1]
//       medianArray[1] = temp
//     }

// /* now we take the median number and grab the actual value of that 
// number in our current array */

//     //median = medianArray[1]
//     //median = array[median]
//     //    median = array[array.length-1]
//   var pivotNumber =  array.splice(0, 1)
//   var left = []
//   var right = []
//   var x = array.length;

//     while (x--) { 

//     if (array[x] <= pivotNumber) {
      
//       left.push(array[x])
//     }
//     else {
        
//       right.push(array[x])
//     }
//   }
//   var leftSorted = quickSortMedian(left)
//   var rightSorted = quickSortMedian(right)

//   return leftSorted.concat(pivotNumber).concat(rightSorted)
// }   



