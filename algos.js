// #1 SECOND HIGHEST ALGORITHM (created from scratch)

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

var newArray = [3,7,5,9,54,62,33,0,23,48,13,99,34,57,9,88,11,20]

//#2 (faster?) SECOND HIGHEST ALGORITHM (created from scratch)

var e = 0; // highest number
var f = 0; // second highest number

var calls = 0;

function secondHighestSplitting(arr) {
    calls++
    var arrayOfArrays = [];
    var array_length = arr.length;
    var highest = [0,0];
    var t=0, i=0;
/* since we know our length is a power of 2, we split these into arrays of 2 numbers each, adding the higher numbers on the left */

    while (array_length>t) {

        var num1 = arr[t];
        var num2 = arr[t+1];

        if (num1 > num2) {
            arrayOfArrays.push([num1, num2])
            calls++
            calls++
        }
        else {
            arrayOfArrays.push([num2, num1])
            calls++
        };

        var num3 = arrayOfArrays[i][0];
        var num4 = arrayOfArrays[i][1];

        if (num3>highest[0]) { 
            highest[0] = num3
            calls++
        }
        else if (num3>highest[1]) { 
            highest[1] = num3
            calls++
        }        
        if (num4>highest[1]) {             
            highest[1] = num4
            calls++
        };               
        i++
        t+=2
    }

console.log('our array of Arrays is '+JSON.stringify(arrayOfArrays));
console.log('our highest array is '+JSON.stringify(highest))

  return highest[1]

}// end secondHighest()

console.log(secondHighestSplitting(newArray));
console.log('calls is '+calls)


//#3 MERGE SORT ALGORITHM - created from online examples

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