// Array: Merge Sort
// visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
// multiple sorts, visualized: https://i.imgur.com/fq0A8hx.gif

// Time Complexity
//  - Best case: O(n log(n)
//  - Average case: O(n log(n))
//   - Worst case: O(n log(n))

// MergeSort(arr[], l,  r)
// If r > l
//      1. Find the middle point to divide the array into two halves:
//              middle m = (l+r)/2
//      2. Call mergeSort for first half:
//              Call mergeSort(arr, l, m)
//      3. Call mergeSort for second half:
//              Call mergeSort(arr, m+1, r)
//      4. Merge the two halves sorted in step 2 and 3:
//              Call mergeSortedArrays(arr1, arr2)

var testArr = [88, 22, 44, 12, 99, 111, 9, 15, 49];

// [88, 22, 44, 12, 99, 111, 9, 15, 49];
// [88, 22, 44, 12]     [99, 111, 9, 15, 49]
// [88, 22]
// [88]

// main recursive function that will be passed in mergeSortedArrays(left, right)
// create a new sorted arr based on the given arr being recursively split and merged.

function mergeSortedArrays(arr1, arr2) {

    let sortedArray = [];                                // creating an empty array to be pushed the sorted values of both arrays

    while (arr1.length && arr2.length) {                 // loop until one of the arrays length exists (are not 0)

        if (arr1[0] < arr2[0]) {                         // checking if the first index of arr1 is less than first index of arr2
            sortedArray.push(arr1.shift());              // if it is less, than remove this value and pushes it to the sortedArray
        } else {
            sortedArray.push(arr2.shift());              // if the first index of the arr2 is smaller, than remove this value and pushes it to the sortedArray
        };

    };

    return [...sortedArray, ...arr1, ...arr2]            // either arr1 or arr2 will be empty and the other one will have just one value left, which will be the greatest value. 
                                                         // so it returns everything that has in the sortedArray and the last value ( which could be in arr1 or arr2)

}

function mergeSort(arr) {

    // base case
    if (arr.length === 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);                     // find the middle index of the array
    const left = arr.slice(0, middle);                             // divinding the array in 2 - left side starting at index 0 and ending at the middle (not including the middle index)
    const right = arr.slice(middle);                               // right side starting at middle index until the end
    
    return mergeSortedArrays(mergeSort(left), mergeSort(right))    // recursion function - callinf the sorted arrays function passing the left and right side as parameters
}

console.log(mergeSort(testArr))
