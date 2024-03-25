/* 
  Given array and an additional value, insert this value at the beginning of
  the array by making space for it at the beginning of the array.
  return the new length of the array.
  
  Do this without using any built-in array methods.
*/

var arr1 = [1, 2, 3];
var newItem1 = 0;
var expected1 = 4;
// after function is called, arr1 should be:
var arr1Expected = [0, 1, 2, 3];

var arr2 = [];
var newItem2 = "a";
var expected2 = 1;
// after function is called, arr2 should be:
var arr2Expected = ["a"];

/**
  Shifts all items to the right by one to make space to add the given new item
  to the front of the given array.
  - Time: O(?).
  - Space: O(?).
  @param {Array<any>} items An array of any kind of items.
  @param {any} newItem To add to front.
  @returns {number} The new length of items.
 */

function unshift(items, newItem) {
  for (var i = 0; i < Math.floor(items.length / 2); i++) {
    var temp = items[items.length - 1 - i];
    items[items.length - 1 - i] = items[i];
    items[i] = temp;
  }
  items.push(newItem);

  for (var i = 0; i < Math.floor(items.length / 2); i++) {
    var temp = items[items.length - 1 - i];
    items[items.length - 1 - i] = items[i];
    items[i] = temp;
  }
  console.log(items);
  console.log(items.length);
}

unshift(arr2, newItem2);
