/* 
  Given an array, move the minimum value to the front in-place
  return the array after done.

  No built in methods.
*/

var nums1 = [6, 4, 5, 1, 3, 2];
var expected1 = [1, 6, 4, 5, 3, 2];

var nums2 = [1, 5, 2, 9];
var expected2 = [1, 5, 2, 9];

// The min occurs twice.
var nums3 = [5, 1, 0, 2, 3, 0];
var expected3 = [0, 5, 1, 2, 3, 0];

function minToFront(nums) {
  var min = Number.MAX_VALUE;
  var minIdx;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
      minIdx = i;
    }
  }

  for (var i = minIdx; i > 0; i--) {
    nums[i] = nums[i - 1];
  }
  nums[0] = min;

  return nums;
}

console.log(minToFront(nums1));
console.log(minToFront(nums2));
console.log(minToFront(nums3));
