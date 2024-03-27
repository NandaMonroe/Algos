/*
  Input: a 2 dimensional array of integers
  Output: A 1 dimensional array of all the same elements preserving original order
*/

// this given array has a length of 3 because it has 3 arrays as items
var twoDimArr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var expected1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var twoDimArr2 = [[1], [2], [3]];
var expected2 = [1, 2, 3];

var twoDimArr3 = [[], [], [10, 20]];
var expected3 = [10, 20];

/**
 * Flattens a two dimensional array into a new one dimensional array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<any>>} twoDimArr An array of arrays of any data type.
 * @returns {Array<any>} The flattened array that should be one dimensional.
 */
function flatten2dArray(twoDimArr) {

  var result = [];
  for (var i = 0; i < twoDimArr.length; i++) {
    for (var n = 0; n < twoDimArr[i].length; n++) {
      result.push(twoDimArr[i][n]);
    }
  }
  return result;
}

console.log(flatten2dArray(twoDimArr1));
console.log(flatten2dArray(twoDimArr2));
console.log(flatten2dArray(twoDimArr3));

/*****************************************************************************/