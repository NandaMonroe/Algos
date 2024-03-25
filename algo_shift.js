/* 
  Given an array, remove and
  return the value at the beginning of the array and then shift the remaining items down to fill the empty space.

  Do this without using any built-in array methods except pop().
*/

var arr1 = [1, 2, 3];
var expected1 = 1;
// after running function arr1 should now be:
var expectedArr1 = [2, 3];

var arr2 = ["a", "b", "c", "d"];
var expected2 = "a";
// after running function arr2 should now be:
var expectedArr2 = ["b", "c", "d"];

var arr3 = [];
var expected3 = undefined;
var expectedArr3 = [];

/*
  Shifts every item of the array to the left by 1 so that the first item is
  removed and returned.
  - Time: O(?).
  - Space: O(?).
  @param {Array<any>} items An array of any kind of items.
  @returns {any} The removed value previously at idx 0.
 */


function shift(items){
    for (var i = 0; i < Math.floor(items.length / 2); i++) {
        var temp = items[items.length - 1 - i];
        items[items.length - 1 - i] = items[i];
        items[i] = temp;
}
var firstIndex = items.pop();

for (var i = 0; i < Math.floor(items.length / 2); i++) {
    var temp = items[items.length - 1 - i];
    items[items.length - 1 - i] = items[i];
    items[i] = temp;
}
console.log(items);
console.log(firstIndex);
return firstIndex;
}

shift(arr3)