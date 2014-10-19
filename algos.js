// SECOND HIGHEST ALGORITHM (created from scratch)

var e = 0; // highest number
var f = 0; // second highest number

function secondHighest(arr) {

    var i = 1;

    while (arr.length>i) {
    	if (i==1) {
    		e = arr[0];
    	    f = arr[0];		
    	}
    	if (arr[i] > e) {
   			f = e;
    		e = arr[i];		
    	}
    	else if (arr[i] < e && arr[i] > f) {
    		f = arr[i];
    	}
    	i++
    }
  console.log('the original array is: '+ arr);
  console.log('our 2 highest numbers are ' +e +' and '+f);
  return f

}// end secondHighest()

var newArray = [3,7,5,9,54,62,33,0,23,48,13,99,34,57,9,88,11]
console.log(secondHighest(newArray));


// MERGE SORT ALGORITHM - created from online examples

var mergeCount = 0;
var mergeSortCount = 0;
var whileCount = 0;

function mergeSort(arr) {
    mergeSortCount++
    if (arr.length < 2) {
        return arr
    }

  var half = parseInt(arr.length/2);
  var left = arr.slice(0,half);
  var right = arr.slice(half,arr.length);

    return merge(mergeSort(left), mergeSort(right));

}// end mergeSort

function merge(left,right) {

    mergeCount++
    var result = [];


    while (left.length && right.length) {
        whileCount++
        if (left[0]<=right[0]) {
            result.push(left.shift());
        }
        else {
            result.push(right.shift());
        }
    }
    while (left.length) {
        whileCount++

        result.push(left.shift());
    }
    while (right.length) {
        whileCount++

        result.push(right.shift());
    }

    return result

}  // end merge()
console.log('our mergeSort result it '+ mergeSort(newArray)); 

console.log('our final mergeCount is '+ mergeCount); 
console.log('our final mergeSortCount is '+ mergeSortCount); 
console.log('our final whileCount is '+ whileCount); 