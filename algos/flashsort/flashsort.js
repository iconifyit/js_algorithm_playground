// console.log('lets flashSort this! '+ flashSort([3,6,1,2,9,10,67,73,2,43,56,90,3,4,3,7,2,9,8,7,9,12,14,15]));

console.log('lets flashSort this! '+ flashSort(['dave','pete','andrew','marco','arturo','joe','alfred','zoey','jim','rob','ed']));

function flashSort(array) {
 // we have no out condition at top because this sucker runs at O(n)!!

    /* the double tilde ~~ is a faster substitute for Math.floor()! */

    var lengthy = array.length;
    var i = 0, j = 0, k = 0, t;
    var m = ~~( lengthy * 0.125 );
    var left = [];
    var anmin = array[ 0 ];
    var nmax = 0;
    var nmove = 0;
    var finalSwaps = 0;
    var leftK = [];

    console.log('our array is '+array)
    console.log('our lengthy is '+lengthy);
    console.log('our m is '+m);

    /* STEP #1:
    1-  Beginning with i = 0 (above), loop through the  elements from 0 up until 1 before the m (pivot?) value (for our array, that is 3)
    2- Set the left array values for these elements to 0
     */

    while(i < m) {
            left[ i ] = 0;
        i++
    }

    /* STEP #2:
    1- Loop through all of the elements
    2- If this element is less than anmin, set the anmin value to this value
    3- if this element is larger than nmax, set the nmax value to this elements INDEX


     */
    for ( i = 1; i < lengthy; ++i ) {
            if ( array[ i ] < anmin ) anmin = array[ i ];
            if ( array[ i ] > array[ nmax ] ) { 
                nmax = i;
                console.log('setting nmax to the index of this value: '+array[i]);
                }
    }

console.log('our min is now '+anmin);
console.log('the INDEX of our max is now '+nmax);

/* STEP #3 
if the max and min are the same, we're done
*/
    if ( anmin == array[ nmax ]) return;

/* STEP #4 
1- Create a new c1 value by using this formula:
        1 less than our m value (remember m is ~~(lengthy * 0.125))
            divided by
        our max less our min

WTF? I have no idea how this is supposed to work, and how the values of the max and min could be related to this at all

*/
    var c1 = ( m - 1 ) / ( array[ nmax ] - anmin );

  
/* STEP #5 
1- Another loop through the elements beginning at 0, and this is NOT conditional, all elements 
will qualify for this
2- Set k to the ~~ of the value of that weird c1 value TIMES the current element LESS anmin
3- I have no fucking idea what ++ before an array does, maybe like push? 
*/

    for ( i = 0; i < lengthy; ++i ) {
            k = ~~( c1 * ( array[ i ] - anmin ) );
            ++left[ k ];
            console.log('STEP #5: left array is now '+left);
    }

/* STEP #6 
1- Sub loop through LEFT array elements between 1 and the m (pivot?) value
2- add the value of the element on the left of this item to this one
*/


    for ( k = 1; k < m; ++k ) {
            left[ k ] += left[ k - 1 ];
            console.log('STEP #6: left array is now '+left);
    }

/* STEP #7
AT this point this algo is a serious enigma - no clue how this left array can point us the right way to sorting the original array!!
1- create a hold number from the value or our max
2- replace the max in the array w/ the FIRST in the array
3- set the first number to the holding or max 

So this just swaps the first element w/ the high number element

*/

    var hold = array[ nmax ];
    array[ nmax ] = array[ 0 ];
    array[ 0 ] = hold;


/* STEP #8
1- start a FLASH var.
2- set k to our m (pivot) - 1
3- set i to our array length -1
4- loop through ALL of our elements again, as nmove is 0 and i is the entire array less 1
5- nested while loop #1: (see loop)
6- nestted while loop #2: (see loop)
*/

    var flash;
    j = 0;
    k = m - 1;
    i = lengthy - 1;


    while ( nmove < i ) {
        // loop as long as j (begin at 0) is LARGER than  the left array's element
        // at the (m-2) position - m is our pivot? so 2 behind the pivot
        // WTF so  j is 0, these elements have to be NEGATIVE...

// I couldn't see why this loop was needed, maybe it's for different situations or maybe strings

            // while ( j > ( left[ k ] - 1 ) ) {
            //     console.log('STEP #8: j is '+j);
            //     console.log('STEP #8: left[k] - 1 is '+left[k]-1);
            //     //set k to Math.floor() of the weird c1 value * the next array element
            //     // LESS the anmin value - WTHF??
            //         k = ~~( c1 * ( array[ ++j ] - anmin ) );
            // }
            // set the FLASH to array[0]
          //  flash = array[ j ];
            // i think i can just change this to 0
               flash = array[ 0 ];
            console.log('STEP #8: our flash value is '+flash);
            
// while j (beginning at 0) is NOT equal to left[m-1]  (so 1 less than our pivot value?)
            while ( j != left[ k ] ) {
                console.log('STEP #8: j is '+j+' left[k] is '+left[k]);
// set k to the of the weird c1 * our LARGEST number (flash) - anmin
                console.log('STEP #8: flash is '+flash+' anmin is '+anmin);
                    k = ~~( c1 * ( flash - anmin ) );
                console.log('STEP #8: k = '+k);
                // set our HOLD value to WTHF?

                console.log('STEP #8: our array is '+array);
                console.log('STEP #8: left array is '+left);
                console.log('WTF is this?? '+ array[(t = left[ k ]-1)]);
/* so after some console-logging I figured out this is just a shortcut way to set the
array value - who knew you could use a formula like that IN and array value */
                 hold = array[ ( t = left[ k ]-1) ];
                console.log('WTF is t? '+t);
                console.log('WTF is hold? '+hold);
                console.log('WTF is hold = to array[t]? '+array[t]);
    // now we SWAP the array[t] to our FLASH value
                    array[ t ] = flash;
                    finalSwaps++
     // now we swap the flash value BACK to our hold value              
                    flash = hold;
                    finalSwaps++
           var nmovey = 'nmove is '+nmove
              var pre = {val: 'val: ' +left, leftK: left[k], nmove: nmovey};
   
                    --left[ k ];
   
      //        so basically this --left[k] means subtract 1 from whatever is at index k 
        
                    ++nmove;
            var nmovey2 =  'nmove is '+nmove
            var post = {val: 'val: '+left, leftK: left[k], nmove2: nmovey2} 

                          leftK.push({pre:pre, post:post})
            }
    }

/* STEP #9
1- loop through ALL elements again, beginning at index 1
2- set our hold var to this element's value
3- set i to 1 less than j
4- nested while loop:
    a) if i (the element 1 smaller than j) is bigger or equal to zero AND
        this element at [i] is GREATER than the hold value (hold is the value of array[j], where j begins at 1 instead of 0 - so j would be the element AFTER i)  
*/
    for( j = 1; j < lengthy; ++j ) {
  console.log('current array is: '+JSON.stringify(array));
            hold = array[ j ];
            i = j - 1;
            console.log('hold is '+hold);
            console.log('i is '+i);
            while( i >= 0 && array[i] > hold ) {
                    finalSwaps++
                    console.log('array i+1 BEFORE: '+array[i+1]);
                // so if this element is greater than the item AFTER it
                    array[ i + 1 ] = array[ i-- ];
                    console.log('array i+1 CHANGED to: '+array[i+1]);
                    // set the element AFTER this one to the one before it
            }
            // finish the SWAP by setting the J element back to the  hold value
            array[ i + 1 ] = hold;
            finalSwaps++
    }
    return array + ' final swaps: '+finalSwaps + '. leftK is $$$$$$$$$$$$$$$$$$$$$$$$'+JSON.stringify(leftK);
}