/*
  Input: Two arrays of equal length containing integers
  Output: A new array where each item is the sum of
  the items in arr1 and arr2 at that same index
 */

  var numbersA1 = [20, 10, 30];
  var numbersB1 = [10, 30, 20];
  var expected1 = [30, 40, 50];
  
  /**
   * Returns a new array that is the sum of the columns of the two given arrays
   * of equal lengths.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Array<number>} nums1
   * @param {Array<number>} nums2
   * @returns {Array<number>} The column sums.
   */
  function sumArrColumns(nums1, nums2) {

    var newArray = [];

    for( var i = 0; i < nums1.length; i++) {
        newArray.push(nums1[i] + nums2[i]);
    }

    return newArray
  }

  console.log(sumArrColumns(numbersA1, numbersB1));
  
  /*****************************************************************************/