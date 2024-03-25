/* 
  Given an array and an index,
  remove the item at that index.
  return the removed item
  
  No built-in array methods except pop().
*/

var arr1 = ["a", "b", "c", "d", "e"];
var removeIdx1 = 1;
var expected1 = "b";
// after function call, arr1 should be:
var arr1Expected = ["a", "c", "d", "e"];

var arr2 = ["a", "b", "c"];
var removeIdx2 = 3;
var expected2 = null;
var arr2Expected = ["a", "b", "c"];

var arr3 = ["a", "b", "c"];
var removeIdx3 = -3;
var expected3 = null;
var arr3Expected = ["a", "b", "c"];

function removeAt(items, idx) {
  if (items[idx] == undefined) {
    return null;
  }

  const removedItem = items[idx];
  for (var i = 0; i < items.length; i++) {
    items[i] = items[i + 1];
  }
  items.pop();
  console.log(items);
  return removedItem;
}

console.log(removeAt(arr1, removeIdx1));
console.log(removeAt(arr2, removeIdx2));
console.log(removeAt(arr3, removeIdx3));

/*******************************************************************************/