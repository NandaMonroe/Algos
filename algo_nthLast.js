/* 
    Given an array and an int which represents the position starting from the back,
    return the nth-to-last element.
    
    JS has introduced the .at method for this purpose, but solve this algo w/o it.
    */

// Last element:
var arr1 = ["a", "b", "c", "d"];
var idx1 = 1;
var expected1 = "d";

// Second to last element:
var arr2 = ["a", "b", "c", "d"];
var idx2 = 2;
var expected2 = "c";

var arr3 = ["a", "b", "c", "d"];
var idx3 = 0;
var expected3 = null;

var arr4 = ["a", "b", "c", "d"];
var idx4 = -1;
var expected4 = null;

var arr5 = [];
var idx5 = 2;
var expected5 = null;

/**
 * Retrieves the nth to last indexed item from the given array.
 * @param {Array<any>} items An array of any kind of items.
 * @param {number} nthToLast
 * @returns {any} The item at the nthToLast index or null.
 */
function nthLast(items, nthToLast) {
  let item = items[items.length - nthToLast];
  if (item === undefined) {
    item = null;
  } else {
    item;
  }
  return item;
}

// Tests
var result1 = nthLast(arr1, idx1);
console.log(result1, "should be", expected1);

var result2 = nthLast(arr2, idx2);
console.log(result2, "should be", expected2);

var result3 = nthLast(arr3, idx3);
console.log(result3, "should be", expected3);

var result4 = nthLast(arr4, idx4);
console.log(result4, "should be", expected4);

var result5 = nthLast(arr5, idx5);
console.log(result5, "should be", expected5);
