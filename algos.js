// #6 Splice verus Slice testing

function addElementToIndex(arr) {

    /*  ok so in this splice, the 3 params tell it to do this:
            1- add this to position 1
            2- take ZERO away in its place
            3- element to add 'luis'
    */
    arr.splice(4, 0, 'luis')
    // this this increases our array by a number, and sticks luis in there
    return arr
}

function addElementToBeginning(arr) {

    /*  ok so in this splice, the 3 params tell it to do this:
            1- add this to position 1
            2- take ZERO away in its place
            3- element to add 'luis'
    */
    arr.unshift('luis')
    // this this increases our array by a number, and sticks luis in there
    return arr
}

function addElementInPlaceOf(arr) {

    /*  ok so in this splice, the 3 params tell it to do this:
            1- add this to position 1
            2- take ONE away in its place
            3- element to add 'luis'
    */
    arr.splice(4, 1, 'luis')
    // this this increases our array by a number, and sticks luis in place of arturo
    return arr
}


var arr3 = ['juan', 'diego','joe', 'pedro', 'arturo'];

//console.log('addElementToIndex check: '+addElementToIndex(arr3))
//console.log('addElementToBeginning check: '+addElementToBeginning(arr3))
console.log('addElementInPlaceOf check: '+addElementInPlaceOf(arr3))

//#5 DETERMINE IF THIS IS AN ODD OR EVEN NUMBER

function isEvenOrOdd(number) {
/* the modulus or percentage sign % is used to figure out what the remainder is if you divide the number on the LEFT by the number on the RIGHT of the modulus. I see it used a lot to figure out if something is an even or odd row in a table of elements */

// regular style

    if (number % 2 > 0) {
        return 'this is an odd number'
    }
    else {
        return 'this is an even number'
    }

// try using ternary operator
/*
var statement = number % 2 > 0 ? 'this is an odd number' : 'this is an even number'
return statement
*/
}
console.log('even or odd? '+ isEvenOrOdd(135));

//#4 DETERMINE IF IS PRIME NUMBER (taken from http://stackoverflow.com/questions/17389350/prime-numbers-javascript)

function isPrime(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }

    return number > 1;
}

// #3 MUTATE ARRAY TO NEW VALUES ALGORITHM (created from scratch)
// this array changes the index values in array a to match those in b
var arr1 = ['joe','pete','ralph','steve','jim','chuck','tim','rob'];
var arr2 = [2,4,5,7,6,0,1,3];

function mutateArray(a,b) {

    var tempArray = new Array(b.length);
    var i = b.length;
// I can get away with a negative while loop here because we aren't doing any splitting
    while(--i) {    
        var element = a[i];
        var newIndex = b[i];
        tempArray[newIndex] = element;
    }
    return tempArray
}

console.log(JSON.stringify(mutateArray(arr1,arr2)));

// #2 SECOND HIGHEST ALGORITHM (created from scratch)

var e = 0; // highest number
var f = 0; // second highest number

function secondHighest(arr) {

    var i = 0;

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

var calls = 0;

function secondHighestSplitting(arr) {
    calls++
    var arrayOfArrays = [];
    var highest = [0,0];
    var t=0
    var i=0;
  /*  4 comparisons for each split, as we are going through the array jumping
   by twos - so comparison total is 4 * (n/2);

/* since we know our length is a power of 2, we split these into arrays of 2 numbers each, adding the higher numbers on the left */

    while (arr.length>i) {

        var num1 = arr[t];
        var num2 = arr[t+1];

        if (num1 > num2) {
            arrayOfArrays.push([num1, num2])
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
        t+=2
        i++
    }

console.log('our array of Arrays is '+JSON.stringify(arrayOfArrays));
console.log('our highest array is '+JSON.stringify(highest))

  return highest[1]

}// end secondHighest()

console.log(secondHighest(newArray));
//console.log(secondHighestSplitting(newArray));
console.log('calls is '+calls)


//#1 MERGE SORT ALGORITHM - created from online examples

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