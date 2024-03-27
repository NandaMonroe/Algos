/* 
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

const nums2 = [1];
const expected2 = 1;

const nums3 = [];
const expected3 = 0;


const nums4 = [1, 2, 3, 4, 5];
const expected4 = 15;

/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
function sumArr(nums) {
    if(nums.length == 0){
        return 0;
    }
    return nums.pop() + sumArr(nums);
}
console.log(sumArr(num1));
console.log(sumArr(num2));
console.log(sumArr(num3));

/*****************************************************************************/

/* 
Recursive Sigma

Input: integer
Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected11 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected22 = 3;
// Explanation: (1+2)

const num3 = -1;
const expected33 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */
function recursiveSigma(num) {

    const int = parseInt(num)

    if (isNaN(int)) {
        return null
    }

    if (int<1){
        return 0
    }

    return int + recursiveSigma(int-1)

}

console.log(recursiveSigma(num1))
console.log(recursiveSigma(num2))
console.log(recursiveSigma(num3))