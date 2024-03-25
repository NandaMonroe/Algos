/* 
  Given two arrays, interleave them into one new array.

  The arrays may be different lengths. The extra items should be added to the
  back of the new array.
*/

const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected1 = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expected2 = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expected3 = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected4 = [42, 0, 6];

/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 */
function interleaveArrays(arr1, arr2) {
  newArr = []

  len = Math.max(arr1.length, arr2.length)

  for (var i = 0; i < len; i++) {
      if (arr1[i] != undefined) {
          newArr.push(arr1[i])
      }
      if (arr2[i] != undefined) {
          newArr.push(arr2[i])
      }
  }
  return newArr
}
console.log(interleaveArrays(arrA1, arrB1))
console.log(interleaveArrays(arrA2, arrB2))
console.log(interleaveArrays(arrA3, arrB3))
console.log(interleaveArrays(arrA4, arrB4))
/*****************************************************************************/

/* 
  Given an array of integers
  return the first integer from the array that is not repeated anywhere else

  If there are multiple non-repeated integers in the array,
  the "first" one will be the one with the lowest index.
*/

const nums1 = [3, 5, 4, 3, 4, 6, 5, 7];
const expected11 = 6;

const nums2 = [3, 5, 5];
const expected22 = 3;

const nums3 = [3, 3, 5];
const expected33 = 5;

const nums4 = [5];
const expected44 = 5;

const nums5 = [];
const expected5 = null;

/**
 * Finds the first int from the given array that has no duplicates. I.e., the
 *    item at the lowest index that doesn't appear again in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number|null} The first int value from the given array that has no
 *    dupes or null if there is none.
 */
function firstNonRepeated(nums) {

  for (var i = 0; i < nums.length; i++) {
    for(var j = 0; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        break
      }
      else {
        return nums[j]
      }
    }
  }
}
console.log(firstNonRepeated(nums1))

/*****************************************************************************/